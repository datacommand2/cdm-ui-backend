import EventCodeMessages from '../event-code/cdm_event_code_message.json' assert { type: 'json' };
import EventErrors from '../event-code/cdm_event_error.json' assert { type: 'json' };

// 에러 메세지를 파싱하는 만드는 함수
export const parseErrorMessage = (errorCode: any, errorParameter: any) => {
    // errorDetail => required_parameter
    if (errorCode === undefined) {
        return '';
    }

    const errorDetail = EventErrors.cdm_event_error.find(v => v.code === errorCode);

    // api call message에 포함된 error parameter
    if (errorParameter && errorParameter !== 'null' && errorDetail?.contents) {
        let errorParams = JSON.parse(errorParameter);
        if (typeof errorParams === 'string') {
            if (errorParams.includes('grpc: failed to unmarshal')) {
                console.log(errorParams);
            } else {
                errorParams = JSON.parse?.(errorParams);
            }
        }
        // errorDeatil.contents는 <%= =%>이 포함된 문자열
        let errorContents = errorDetail.contents;

        // errorParams의 key 값으로 순회하면서 해당 key의 value값으로 대체하여
        // 새로운 문자열을 만든다.
        Object.keys(errorParams).map(key => {
            errorContents = errorContents.replace(`<%= ${key} %>`, errorParams[key]);
        });

        return errorContents;
    } else {
        // error parameter가 없는 경우
        return errorDetail?.contents ?? '';
    }
};

const defaultError = {
    data: {
        message: {
            code: 'unknown error',
            contents: 'null',
            error_message: '',
            error_code: 500,
        },
    },
    status: 500,
    headers: 'unknown',
};

/**
 *  message.code를 한글로 파싱하는 함수
 *  parsedMsg 의 형식은
 * - code: 'cdm-center.error'
 * - language: 'kor'
 * - brief: '클러스터 등록 실패'
 * - detail: '클러스터 등록이 실패했습니다.'
 * - detail을 반환하고 만약 parsedMsg가 undefined면 code를 반환한다.
 */
// message.code를 파싱하는 함수
export const langMessageCode = (messageCode: any) => {
    const parsedMsg = EventCodeMessages.cdm_event_code_message.find(v => v.code === messageCode);
    return parsedMsg?.detail ?? messageCode;
};

/**
 * 에러 처리하는 함수
 * 에러는 headers안에 'x-message-code', 'x-message-contents' 형태로 담겨져서 넘어온다.
 */
export const returnError = (response: any) => {
    const headers = response?.headers;
    const status = response?.status;
    const errorData = response?.data;

    defaultError.data.message.contents = errorData;
    defaultError.data.message.error_message = errorData;
    defaultError.status = status;
    if (status === 408) {
        defaultError.data.message.code = response.statusText;
        defaultError.data.message.error_code = response.status;
    }

    if (!headers) return defaultError;
    if (!headers?.['x-message-code']) return defaultError;

    const [messageCode, errorCode] = headers['x-message-code'].split(':');
    const contents = headers?.['x-message-contents'];

    const parsedMessageCode = langMessageCode(messageCode);
    const parsedErrorMessage = parseErrorMessage(errorCode, contents);

    const data = {
        message: {
            originalCode: messageCode,
            code: parsedMessageCode,
            contents: contents ?? '-',
            error_message: parsedErrorMessage,
            error_code: status,
        },
    };

    console.groupCollapsed('[API-GATEWAY 에서 받은 에러]');
    const responseTime = new Date().toISOString();
    console.log(`>>> Response Time : ${responseTime}`);
    console.log(`>>> Error : `, data)
    console.groupEnd();
    return {
        data,
        status,
        headers,
    };
};
