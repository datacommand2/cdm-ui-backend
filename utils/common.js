const EventCodeMessages = require('../event-code/cdm_event_code_message.json');
const EventErrors = require('../event-code/cdm_event_error.json');

// 에러 메세지를 파싱하는 만드는 함수
const parseErrorMessage = (errorCode, errorParameter) => {
    // errorDetail => required_parameter
    if (errorCode === undefined) {
        return '';
    }
    const errorDetail = EventErrors.cdm_event_error.find(
        (v) => v.code === errorCode
        // (v) => v.code === 'required_parameter'
    );

    // api call message에 포함된 error parameter
    if (errorParameter && errorParameter !== 'null' && errorDetail?.contents) {
        const errorParams = JSON.parse(errorParameter);

        // errorDeatil.contents는 <%= =%>이 포함된 문자열
        let errorContents = errorDetail.contents;

        // errorParams의 key 값으로 순회하면서 해당 key의 value값으로 대체하여
        // 새로운 문자열을 만든다.
        Object.keys(errorParams).map((key) => {
            errorContents = errorContents.replace(`<%= ${key} %>`, errorParams[key]);
        });

        return errorContents;
    } else {
        // error parameter가 없는 경우
        return errorDetail?.contents ?? '';
    }
};

// message.code를 파싱하는 함수
const langMessageCode = (messageCode) => {
    const parsedMsg = EventCodeMessages.cdm_event_code_message.find((v) => v.code === messageCode);
    // const parsedMsg = EventCodeMessages.cdm_event_code_message.find(
    //     (v) => v.code === 'cdm-dr.manager.add_protection_group.failure-add'
    // );
    return parsedMsg?.detail ?? messageCode;
};

module.exports = { parseErrorMessage, langMessageCode };
