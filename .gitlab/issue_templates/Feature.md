# Please read **THIS** !

먼저 ~"Feature" 이슈가 중복되지 않는지 확인하십시오.

PM 혹은 PL 은 제목을 "`목표 버전`.`기능 코드` `내용`" 형태로 작성하고, 기능 개선이라면 패치가 필요한 배포 버전의 `~"Pick into 주버전.부버전"` 라벨을 추가하십시오.

[Redmine 일감](http://10.1.1.220:8070/projects/cdm-dr/issues) 이 있다면 [[**일감**](#일감)] 항목을 작성하고, Redmine 일감의 *담당자*를 '*개발 담당자*'로 *결함상태*를 '*수정대기*'로 변경하십시오.

**이슈를 개발 담당자에게 Assign 하고, 이 공지를 지우십시오.**  
  `/assign @개발담당자`

--------------------------------------------------------------------------------------------------


일감
----------
<!-- [Redmine](http://10.1.1.220:8070/projects/cdm-dr/issues) 의 일감 링크를 추가하십시오 -->

관련 이슈
----------
<!-- 기능에 대한 [문서변경 이슈](http://10.1.1.220/cdm/cdm-disaster-recovery/documents/-/issues) 링크 등을 리스트 형태로 작성하십시오 -->

개발 기능
----------
<!-- 개발할 기능에 대한 [기능목록](http://10.1.1.220/cdm/cdm-disaster-recovery/documents/-/blob/master/functions.md)에서의 링크를 추가하십시오 -->

상세설계
----------
<!-- Mermaid: https://docs.gitlab.com/ee/user/markdown.html#mermaid -->
<!-- PlantUML: https://docs.gitlab.com/ee/user/markdown.html#plantuml -->

패치 정보
----------
<!-- 이슈 브랜치에서 빌드 및 업로드 된 도커 이미지(<레지스트리>/<이미지>:<배포버전 브램치>-<이슈번호>)를 입력하십시오 -->
<!-- e.g. registry.datacommand.co.kr/cdm-disaster-recovery-manager:1-0-stable-11 -->

체크리스트
----------
- [ ] [기능의 기초설계](http://10.1.1.220/cdm/cdm-disaster-recovery/documents/-/blob/master/functions.md) 검토
  - [Redmine 일감](http://10.1.1.220:8070/projects/cdm-dr/issues) 이 있다면 Redmine 일감의 *결함상태*를 '*수정중*' 으로 변경
  + 기능의 기초설계가 없거나, 이해되지 않거나, 복잡하거나, 명확하지 않는다면 [문서변경 이슈를 생성](http://10.1.1.220/cdm/cdm-disaster-recovery/documents/issues/new)하여 업데이트하고, [[**관련 이슈**](#관련-이슈)] 항목에 추가합니다.  
- [ ] [[**상세설계**](#상세설계)] 항목을 작성하여 관련 요구사항 참여자들과 설계 내용 검토
- [ ] 하단의 "Create merge request"를 통해 브랜치와 MR(Merge request) 생성
  + 특정 배포 버전의 기능을 개선하기 위한 일감이라면 패치가 필요한 배포 버전의 브랜치(예: `1-0-stable`)로부터 브랜치 생성
  + 기능을 구현하고 생성된 MR(을)를 개발(Feature) 양식에 맞춰 작성한 후 병합 요청
- [ ] 병합이 완료되면 [[**패치 정보**](#패치-정보)]를 입력
  - Redmine 일감이 없다면 [새 일감](http://10.1.1.220:8070/projects/cdm-dr/issues/new) 을 생성하고, *담당자*를 '*QA 담당자*' 로 *결함상태*를 '*시험대기*' 로 변경
- [ ] 체크리스트를 모두 확인하고, 이슈를 닫음  
  `/close`

/label ~"Feature"
