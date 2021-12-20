import React, { useState } from "react";
import styled from "styled-components";
import { glupAppSources } from "../../../images";

const ContentWrap = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 100%;
`;

const Category = styled.h1`
    font-family: "AppleSDGothicNeoB";
    font-size: 30px;
    margin-bottom: 60px;
    @media ${({ theme }) => theme.size960} {
        font-size: 27px;
    }
    @media ${({ theme }) => theme.size568} {
        font-size: 24px;
    }
`;

const Title = styled.h2`
    font-family: "AppleSDGothicNeoB";
    font-size: 24px;
    margin-bottom: 30px;
    line-height: 24px;
    @media ${({ theme }) => theme.size960} {
        font-size: 20px;
    }
    @media ${({ theme }) => theme.size568} {
        font-size: 16px;
        margin-bottom: 12px;
    }
`;
const Description = styled.p`
    font-family: "AppleSDGothicNeoM";
    width: 100%;
    font-size: 18px;
    margin-bottom: 60px;
    line-height: 32px;
    word-break: keep-all;
    @media ${({ theme }) => theme.size960} {
        font-size: 16px;
    }
    @media ${({ theme }) => theme.size568} {
        font-size: 13px;
        line-height: 26px;
        margin-bottom: 53px;
    }
`;

const Point = styled.span`
    color: ${({ theme }) => theme.gulpAppFrimary};
`;

const StyledImage = styled.img`
    width: 665px;
    margin-bottom: 24px;
    @media ${({ theme }) => theme.size768} {
        width: 528px;
    }
    @media ${({ theme }) => theme.size568} {
        width: 280px;
    }
`;

const WorkIssue = ({}) => {
    const category = [
        "<AlarmList />",
        "<AddAlarm />",
        "<Calendar />",
        "<Rank />",
        "<Stack />",
    ];

    return (
        <ContentWrap
            style={{
                marginTop: 50,
            }}
        >
            <Category>{category[0]}</Category>
            <Title>
                삭제 기능 응용하기(feat. <Point>bind()</Point>)
            </Title>
            <Description>
                등록되어있는 알람을 삭제하는 과정에서, 알람에 있는 메뉴버튼을
                눌러 모달창을 띄우고, 그 안에서 ‘지우기'를 눌러 해당 알람을
                삭제해야 했습니다. 이 과정에서 문제는 모달에 있는 ‘지우기'
                버튼을 누를 시 이용자가{" "}
                <Point>어떤 알람의 메뉴버튼을 눌렀는지</Point> 찾는
                방법이었습니다. 제가 공부하며 배웠던 delete 기능은 오브젝트에
                있는 ‘삭제' 버튼을 통해 바로 해당 id의 오브젝트를 지우는
                방법이었으나, 현재 앱에서는 중간에 모달창이 들어가기 때문에 해당
                알람을 삭제하기 위해서는 <Point>알람 오브젝트의 id</Point>를
                파라미터로 넘겨주어야 했습니다. 이용자가 메뉴를 누른 알람의 id를
                state에 저장해놓은 뒤, ‘지우기' 버튼을 눌렀을 때 ‘bind’ 함수를
                이용해 알람삭제 함수에 저장된 id를 전달하고, 전달받은 id의
                오브젝트를 삭제시키는 형태로 처리했습니다.
            </Description>
            <Title
                style={{
                    marginBottom: 14,
                }}
            >
                시간 가져와서 내맘대로 꾸미기
            </Title>
            <StyledImage src={glupAppSources.workIssue01} />
            <Description>
                이용자가 선택한 시간이 화면에 그대로 쓰였으면 ‘오전 08:30’으로
                쓰였을 것입니다. 이것을 시각(08:30)과 AM/PM(오전/오후)을 각각의
                디자인 요소로 분리시켜 놓길 원하였고, date picker 라이브러리에서
                시간 값을 가져올 때 (ampm, time) 이라는 props로 (
                <Point>date.format("a/p"), date.format("hh:mm")</Point>) 각각
                가져왔습니다. 이후 ampm props가 ‘오전'이면 ‘AM’, ‘오후'면
                ‘PM’으로 변환하여 state에 저장하여 사용할 수 있었습니다.
            </Description>
            <Title>
                화면에도 focus가 있다?!(feat. <Point>addListener</Point>)
            </Title>
            <Description>
                [알람추가] 화면에서 새로운 알람을 저장한 뒤 [알람목록] 화면으로
                돌아왔을 때 새로 알람이 추가되지 않았던 점이 있었습니다. 이는
                화면만 이동하는 것으로 끝나는 것이 아니라 포커스도 이동시켜야
                한다는 것을 배울 수 있었습니다. 포커스를 알람목록 화면으로
                이동시켰을 경우에 함수를 호출시켜줘야 했습니다. 방법은{" "}
                <Point>addListener</Point>를 이용하는 방법, react-native 훅인{" "}
                <Point>useFocusEffect</Point> 또는 <Point>useIsFocused</Point>를
                사용하는 방법이 있었습니다. 저는 그 중 addListener가 더욱
                전통적인 라이프사이클 방식을 사용하는 것 같아 이것으로 제 코드를
                정리해보고 싶었습니다. ‘navigation.addListener("focus",
                function)’ 안에 저장된 알람을 불러와 목록창에 표시해주도록
                하였고, 마운트가 끝날 경우 위 함수를 리턴시켜 이벤트를 종료하는
                것까지 적용해 구현에 성공할 수 있었습니다.
            </Description>
            <Category>{category[1]}</Category>
            <Title>
                반복해서 조건을 확인하기(feat. <Point>some()</Point>,{" "}
                <Point>every()</Point>)
            </Title>
            <Description>
                이용자가 직접 선택지를 고르거나 입력해야 하는 input이 있는
                화면의 경우 빈칸인 상태로 다음 화면으로 넘어갈 수 없도록 기능을
                만들어주어야 했습니다. [알람추가] 화면의 경우 약, 복용시간, 요일
                총 3가지 값이 존재하는지 확인하기 위해 다중 if문을
                사용하였습니다. 우선 각각의 값을 state로 정리해놓은 뒤 if(등록된
                약이 있는지) 👉 if(선택한 복용시간이 있는지) 👉 if(체크된 요일이
                있는지) 순서대로 확인할 수 있도록 구현을 했습니다. 여기서 마지막{" "}
                <Point>if(체크된 요일이 있는지)</Point>에서는 전체 요일 중에
                'checked : true'로 되어있는 요일이 있으면 ‘체크된 요일이 있다’고
                판단하도록 기능을 생각했습니다. 이 경우 반복문을 통해 요일
                오브젝트를 하나하나 체크해야 했습니다. 반복문은 주로 map을
                사용했으나 map은 컴포넌트를 반복시켜서 보여줄 때 사용하는
                함수이기에 지금 구현할 기능에 쓰일 수 없었습니다. 그래서 다른
                함수를 찾다가 ‘some’ 함수를 발견하였고, 조건을 만족하면 바로
                true를 반환시켜주도록 하여 구현할 수 있었습니다.
            </Description>
            <Category>{category[2]}</Category>
            <Title>라이브러리 디자인 갈아엎기</Title>
            <StyledImage src={glupAppSources.workIssue02} />
            <Description>
                라이브러리의 고유 속성에는 markedDates(마크스타일),
                hideArrows(화살표 노출), showWeekNumbers(총 몇째 주 노출),
                hideDayNames(요일 노출) 등 어느정도 스타일을 조정하는 속성이
                있었지만 섬세한 작업은 어려움이 있었습니다. 또한 제 작업물과
                같이 ‘월’이 표시되는 박스와 ‘일’이 표시되는 박스를 따로따로
                노출하는 것도 불가능 했습니다. 저는 이런 부분을 구현시키기 위해
                직접 node module에 들어가 분석했습니다. 이 안에서 스타일을
                건드리면 라이브러리의 기능을 그대로 유지하면서 디자인적인 시도를
                할 수 있다는 걸 깨달았습니다. 하지만 .gitignore에서 node
                module은 커밋과 푸시를 막았기 때문에 저장에 어려움이 있다는 것을
                깨달았습니다. 이 부분은 react-native-calendars 라이브러리의
                라이센스를 확인 후 직접 클론받아서 필요한 부분을 수정 후에
                패키지를 로컬로 추가했습니다.
            </Description>
            <Category>{category[3]}</Category>
            <Title>그 많은 데이터를 한번에 다 뿌리면 너무 무거울텐데</Title>
            <Description>
                약 리스트를 보여주는 [영양제 랭킹] 화면에는 데이터가 많게는
                수백개까지 들어갈 수가 있기에 이 데이터들을 화면에 뿌려주는
                과정에서 메모리가 무거워질 수 있다고 생각했습니다. 이 것을
                해결하기 위해서는 화면에 보여지는 안에서만 리스트가 노출되고
                그외에는 리스트가 가려지는 방법으로 해주면 데이터가 많아도
                메모리가 무거워질 일이 없을 것이라고 판단했습니다. 이는 마침
                react native에서 제공하는 FlatList 컴포넌트가 있기에 적용방법을
                익혀 구현할 수 있었습니다.
            </Description>
            <Category>{category[4]}</Category>
            <Title>뒤로가기 버튼은 따로</Title>
            <Description>내용내용</Description>
        </ContentWrap>
    );
};

export default WorkIssue;
