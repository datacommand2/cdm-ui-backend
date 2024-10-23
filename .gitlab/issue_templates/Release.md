# Please read **THIS** !

먼저 ~"Release" 이슈가 중복되지 않는지 확인하십시오.

PM 은 제목을 "Release `주버전`.`부버전`" 형태로 작성하십시오.

**하단의 양식을 다 채운 후에 이 공지를 지우시기 바랍니다.**

--------------------------------------------------------------------------------------------------

RC0
==========

변경사항
----------
### Added
<!-- 새로 추가된 기능 -->

### Changed
<!-- 변경된 기능 -->

### Deprecated
<!-- 차후에 제거될 기능 -->

### Removed
<!-- 제거된 기능 -->

### Fixed
<!-- 수정된 버그 -->

### Security
<!-- 취약점 보안 내용 -->

체크리스트
----------
- [ ] 마스터 브랜치로부터 `주버전`-`부버전`-stable 브랜치로 분기하고, [변경사항](CHANGELOG.md)을 기록
  * 만약 분기해야하는 커밋(Commit)이 최신의 상태가 아닌 경우 해당 커밋에 v`주버전`.`부버전`-prev 형태의 태그 등록하여 분기
- [ ] 배포 후보(Release Candidates)를 지정하여 v`주버전`.`부버전`-rc0 태그를 등록
- [ ] [Redmine 에 일감 등록](http://10.1.1.220:8070/projects/cdm-dr/issues/new) 하여 '*QA 담당자*'에게 테스트 요청

------
* QA 테스트 중 결함이 발견되었다면 결함을 해결하고, 아래의 RC 양식을 사용하여 새로운 배포 후보를 작성하여 토론(Start discussion)으로 등록하십시오
  <details>
    <summary>Click to expand!</summary>

    ```
    RC`후보 번호`
    ==========

    변경사항
    ----------
    ### Added

    ### Changed

    ### Deprecated

    ### Removed

    ### Fixed

    ### Security

    체크리스트
    ----------
    - [ ] [변경사항](CHANGELOG.md)을 기록
    - [ ] 배포 후보(Release Candidates)를 지정하여 v`주버전`.`부버전`-rc`후보 번호` 태그를 등록
    - [ ] [Redmine 에 일감 등록](http://10.1.1.220:8070/projects/cdm-dr/issues/new) 하여 '*QA 담당자*'에게 테스트 요청
    ```
  </details>

------
* 이 이슈를 닫기 전에 다음 사항들을 점검했는지 확인해 보십시오:
  - [ ] [프로젝트 기여 가이드](CONTRIBUTING.md) 준수
  - [ ] [변경사항](CHANGELOG.md)을 마스터 브랜치에 반영
  - [ ] 마지막으로 테스트가 통과한 커밋에 버전 태그 v`주버전`.`부버전`.0 등록
  - [ ] \~"Pick into `주버전`.`부버전`" 라벨을 아래와 같이 생성
    ```
    - Title: Pick into `주버전`.`부버전`
    - Description:  
      변경사항을 머지 리퀘스트(MR)의 체리-픽(cherry-pick)을 사용하여 `주버전`-`부버전`-stable 브랜치에 적용해야 합니다.
    - Background color: #A8D695
    ```
  - [ ] 이슈를 잠금 `Lock issue`

/label ~Release
