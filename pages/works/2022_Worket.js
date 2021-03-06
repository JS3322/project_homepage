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
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import { Title, Meta, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="2022 Worket">
    <Container>
      <Title>
      데이터 저장, 분석 시스템 구현 <Badge>2022</Badge>
      </Title>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>개요</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
        수집 된 데이터 분석과 시각화디자인하고 데이터 관리시스템 구현
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Badge mr={2}>Stack</Badge>
          <span>Go1.17 | JavascriptEC6 | python3.9 | Django2.2 | CSS3 | Next.js | Nest.js</span>
        </ListItem>
        <ListItem>
          <Meta>ENV</Meta>
          <span>BlockChain | BoltDB | MSSQL | RedisDB | GKE | OCI | Docker | graphQL | REST API | Nginx | JWT | Illustrator | Blender | MagicVoxel | Ploty | Pandas</span>
        </ListItem>
      </List>

      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
      <NextLink href="https://github.com/JS3322/project_worket">
        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
          Source Link
        </Button>
      </NextLink>
      </Box>

      <Heading as="h3" fontSize={16} my={6}>
        <Center>주요 업무</Center>
      </Heading>

      <UnorderedList my={4}>
   
        <ListItem>
          쿠버네티스 구성과 로그파일 수집과 모니터링. docker network 활용하여 가상 멀티 서버 로컬개발환경 구성과 minikube와 k9s로 간이 쿠버네트스 테스트. GKE, OKE 서비스 사용하여 MSA 아키텍스 서비스 배포.
        </ListItem>

        <ListItem>
          개발 된 응용프로그램 관리 CLI 개발. 네트워크 URL Response 에러코드 및 헤더를 활용하여 활성화 쿠버네티스 파드 및 마이크로서비스 체크 시스템 구성.
        </ListItem>

        <ListItem>
          데이터 수집 및 모델링 데이터 API 배포 시스템 구축. 워크로드에 자동 파이프라인 세팅으로 Cloud Build API 사용하여 CI/CD 구축과 MSSQL과 redisDB를 병행하여 적합한 데이터 저장과 솔루션에 적합한 균형 잡기. 
        </ListItem>

        <ListItem>
          데이터 통계 시스템 구현. Python dash 라이브러리를 react로 커스텀하여 그래프 출력. 오버샘플링과 가중치 조절로 부족한 데이터 전처리 병행. 적은 데이터에 k-fold 교차검증 테스트 진행.
        </ListItem>

        <ListItem>
          문서 작성과 관리. Notion을 활용한 API, 아키텍트, 개발환경 메뉴얼 작성. 마인드맵을 사용하여 통계 알고리즘과 브레인스토밍.
        </ListItem>

      </UnorderedList>
      
      <WorkImage src="/images/works/2022_Worket_contents_0001.png" alt="2022_Worket" />
      <WorkImage src="/images/works/2022_Worket_contents_0002.png" alt="2022_Worket" />
      
    </Container>
  </Layout>
)

export default Work
