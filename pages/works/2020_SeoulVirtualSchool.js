import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Button,
  Box
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import { Title, Meta, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="2020 서울대학교 모바일가상학교 통합관리시스템">
    <Container>
      <Title>
      서울대학교 모바일가상학교 통합관리시스템 <Badge>2020</Badge>
      </Title>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>개요</Center>
      </Heading>
      
      <UnorderedList my={4}>
        <ListItem>
        데이터 연산 추천서비스 API 개발 및 VR, AR 통합 웹시스템 기획 및 구현과 AWS 마이그레이션 작업
        </ListItem>
      </UnorderedList>
      

      <List ml={4} my={4}>
        <ListItem>
          <Badge mr={2}>Stack</Badge>
          <span>Java8 | JavaScriptES6 | Django2.2 | CSS3 </span>
        </ListItem>
        <ListItem>
          <Meta>ENV</Meta>
          <span>Oracle DB 19c | ORM | Tomcat8.5 | Nginx1.14 | Spring Cloud | batch | JPA | Hibernate | Selenium | AWS EC2 | AWS route 53 | Oracle ADW | centOS7 | ELK | Storybook6 | babel7 | gulp4 | react16 | node-sass4 | tailwind | Illustrator | Redmine | Google Workspace</span>
        </ListItem>
      </List>

      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
        No links to internal services
        </Button>
      </Box>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>주요 업무</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
        데이터 수집과 통계분석/ 그래프/ 리포트 작성 모듈 개발. ELK 환경 제공 및 Logstash로 회원접속 로그와 추천서비스 알고리즘 테스트 케이스를 위한 데이터 수집 시스템 개발과 일정기간 동안 사용할 통계 데이터는 oracle view table사용하여 연산작업 줄이고, 중복 문구 및 교환문구를 한 문단으로 저장하고, 교환문구의 포인터를 저장하여 교환작업으로 검색, 트래픽을 고려한 로직 재구현.
        </ListItem>

        <ListItem>
        진단 문항 관리 시스템 기획, 구현 및 최적화. 문항관련 테이블의 update 기록을 수치화하여 테이블 관계성과 조인의 편의성을 고려한 db 모델링 기획 및 shutdownhook 활용 및 lazy generator 활용하여 데이터 늦은 연산작업으로 비동기 체감이 늦는 이슈, 예외처리 고려.
        </ListItem>

        <ListItem>
        자동 카테고리화 시스템 개발. 가중치 변화 적용 시스템 개발하여 데이터 카테고리화 실시간 적용하고 데이터를 각 유형으로 나누기 위해 유클리디 기반 통계 모델링 개발.
        </ListItem>

        <ListItem>
        밀도기반 클러스터 모델링 및 추천 서비스 시스템 API 개발. 수시로 바뀌는 클라이언트의 요구사항에 맞춰 실시간 통계 알고리즘을 구현하여 hash값으로 기존 클러스트링 추천 데이터값을 통합 실시간 업데이트 모듈 서비스를 개발하여 솔루션 추천 및 효과예정을 시뮬레이션하여 가중치 서비스 개발.
        </ListItem>

        <ListItem>
        AWS 레거시 마이그레이션 및 리팩토링. centos6 컨테이너를 제공 않는 문제와 cost와 이식성을 고려하여 레거시 앱을 vm 마이그레이션을 적용하였고, bastion 호스트를 구현하여 보안 관리와 스프링 클라우드를 통한 MSA구조로 앱서비스 제공.
        </ListItem>

        <ListItem>
        React 비동기 로딩 관리 및 Embed구조와 배포. React Suspense와 SWR 등 기능을 활용한 비동기 튜닝, Youtube를 포함한 Embed컴포넌트 기반으로 반응형과 크로스브라우징을 고려한 개발과 HTML, CSS, 데이터처리 컴포넌트화 설계 구현. 기존 웹앱을 PWA와 구글스토어에 개시하여 보수 경험.
        </ListItem>

        <ListItem>
        의료, VR, 모바일 통합관리 시스템 PM. 5억 연구비의 프로젝트에 통합관리 시스템 웹개발 파트 PM으로 참여. 모바일 가상학교 청소년 정신건강 진단 및 훈련시스템 개발 연구개발보고서 작성과 이모티콘, 시각디자인 작업. 앱서비스 병합 및 개발이력, 상태관리 운용하여 5개의 기업에 패키지 솔루션 납품 및 추천 시스템 기획, 개발하여 매출액 40% 증가 성과이력.
        </ListItem>

        <ListItem>
        선정된 여러 연구개발계획서 작성. 비공기압 타이어 제품 디자인 기술개발 연구개발계획서 작성, 자동차 상태 점검 기술 및 모니터링 용 모바일 앱 개발 연구개발보고서 작성, 회전설비 진동 인공지능형 감시 시스템개발 연구개발계획서 작성, 경남권 수산물 인공지능 분류 시스템 연구수행계획서 작성.
        </ListItem>
        
      </UnorderedList>

      <WorkImage src="/images/works/2020_SeoulVirtualSchool_contents_0001.png" alt="2020_SeoulVirtualSchool" />
      <WorkImage src="/images/works/2020_SeoulVirtualSchool_contents_0002.png" alt="2020_SeoulVirtualSchool" />
      <WorkImage src="/images/works/2020_SeoulVirtualSchool_contents_0003.png" alt="2020_SeoulVirtualSchool" />
      
    </Container>
  </Layout>
)

export default Work
