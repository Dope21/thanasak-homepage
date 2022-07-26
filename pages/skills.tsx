import Layout from '../components/layout/content'
import Section from '../components/section'
import { Heading, Title } from '../components/title'
import Image from 'next/image'

import TsLogo from '../public/images/skills/ts.png'
import NextLogo from '../public/images/skills/next.png'
import TailwindLogo from '../public/images/skills/tailwind.png'
import ChakraLogo from '../public/images/skills/chakra.png'
import B5Logo from '../public/images/skills/b5.png'
import SassLogo from '../public/images/skills/sass.png'
import JqLogo from '../public/images/skills/jq.png'
import PhpLogo from '../public/images/skills/php.png'
import NodeLogo from '../public/images/skills/node.png'
import MysqlLogo from '../public/images/skills/mysql.png'
import PsLogo from '../public/images/skills/ps.png'
import FigmaLogo from '../public/images/skills/figma.png'
import GitLogo from '../public/images/skills/git.png'

const Icon = ({ children, icon }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="relative min-w-[50px] min-h-[50px]">
        <Image src={icon} layout="fill" objectFit="contain" alt="skill-icon" />
      </div>
      <p className="mt-2 text-center sub-text-color">{children}</p>
    </div>
  )
}

const Skills = () => {
  return (
    <Layout>
      <Section>
        <Title>The Technologies I use!</Title>

        <div className="mt-10">
          <Section delay={0.2}>
            <Heading>Front-End</Heading>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 items-center justify-center">
              <Icon icon={TsLogo}>TypeScript</Icon>
              <Icon icon={NextLogo}>Next.js</Icon>
              <Icon icon={TailwindLogo}>Tailwind</Icon>
              <Icon icon={ChakraLogo}>Chakra UI</Icon>
              <Icon icon={B5Logo}>Bootstrap 5</Icon>
              <Icon icon={SassLogo}>Sass/SCSS</Icon>
              <Icon icon={JqLogo}>jQuery</Icon>
            </div>
          </Section>

          <Section delay={0.3}>
            <Heading>Back-End</Heading>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 items-center justify-center">
              <Icon icon={NodeLogo}>Node.js</Icon>
              <Icon icon={PhpLogo}>PHP</Icon>
              <Icon icon={MysqlLogo}>MySQL</Icon>
            </div>
          </Section>

          <Section delay={0.4}>
            <Heading>Other</Heading>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 items-center justify-center">
              <Icon icon={GitLogo}>Git</Icon>
              <Icon icon={FigmaLogo}>Figma</Icon>
              <Icon icon={PsLogo}>Photoshop</Icon>
            </div>
          </Section>
        </div>
      </Section>
    </Layout>
  )
}

export default Skills
