import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.certification.title,
      display: about.certification.display,
      items: about.certification.certificate.map((certificate) => certificate.name),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills[0].items.map((skill) => skill.name),
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Flex paddingX="8">Schedule a call</Flex>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth data-border="rounded">
                {social.map(
                  (item) =>
                    item.link && (
                        <React.Fragment key={item.name}>
                            <Button
                                className="s-flex-hide"
                                key={item.name}
                                href={item.link}
                                prefixIcon={item.icon}
                                label={item.name}
                                size="s"
                                weight="default"
                                variant="secondary"
                            />
                            <IconButton
                                className="s-flex-show"
                                size="l"
                                key={`${item.name}-icon`}
                                href={item.link}
                                icon={item.icon}
                                variant="secondary"
                            />
                        </React.Fragment>
                    ),
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="8">
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img
                          src={experience.companyLogo?.src}
                          alt={experience.companyLogo?.alt}
                          //@ts-ignore
                          style={experience.companyLogo?.style}
                        />
                        <Text variant="heading-strong-m">
                          <a href={experience.website} target="_blank" rel="noopener noreferrer">
                            {experience.company}
                          </a>
                        </Text>
                      </div>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
                      <Text variant="body-default-s" onBackground="brand-weak" marginBottom="s" marginLeft="2">
                        {experience.role}
                      </Text>
                      <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="s">
                        {experience.type}
                      </Text>
                    </Flex>

                    {experience.projects && experience.projects.length > 0 && (
                      <>
                        <Text as="li" variant="body-default-m" marginBottom="4">Projects</Text>
                        <Flex wrap gap="12" marginBottom="8" marginLeft="16">
                          {experience.projects.map((project, idx) => (
                            <Flex
                              key={idx}
                              vertical="center"
                              gap="8"
                              padding="4"
                              className="border-1 radius-s align-center Tag_tag__JeNYb Tag_neutral__3BOpF"
                              style={{ background: 'rgb(110 117 124 / 21%)', borderColor: 'darkgray', color: 'var(--neutral-on-background-strong)' }}
                            >
                              {project.logo && (
                                <img
                                  src={`/images/projects/${project.logo}`}
                                  alt={project.name}
                                  //@ts-ignore
                                  style={project?.style}
                                />
                              )}
                              <Text variant="body-default-s" onBackground="neutral-medium">{project.name}</Text>
                            </Flex>
                          ))}
                        </Flex>
                      </>
                    )}
                    <Column as="ul">
                      {experience.achievements.map((achievement: JSX.Element, index: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${index}`}
                        >
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.certification.display && (
            <>
              <Heading
                as="h2"
                id={about.certification.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.certification.title}
              </Heading>

              <Column fillWidth gap="s" marginBottom="40">
                {about.certification.certificate.map((certificate, index) => (
                  <Flex
                    key={`${certificate.name}-${index}`}
                    direction="row"
                    wrap
                    style={{
                      border: '1px solid #d1d5db', // tailwind gray-300 equivalent
                      borderRadius: '12px',
                      padding: '16px',
                      gap: '16px',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                    }}
                  >
                    {/* Logo */}
                    {certificate.logo && (
                      <img
                        src={certificate.logo.src}
                        alt={certificate.logo.alt}
                        style={{
                          //@ts-ignore
                          width: '80px',
                          //@ts-ignore
                          height: '80px',
                          //@ts-ignore
                          objectFit: 'contain',
                          flexShrink: 0,
                          ...certificate.logo.style,
                        }}
                      />
                    )}

                    {/* Certificate Info */}
                    <Column flex={1} gap="1">
                      {/* Certificate Name */}
                      <Text variant="heading-strong-m" style={{ marginBottom: '4px' }}>
                        <a
                          href={certificate.link || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {certificate.name}
                        </a>
                      </Text>

                      {/* Provider */}
                      {certificate.provider && (
                        <Text variant="body-default-m" onBackground="neutral-strong">
                          <strong>Provider:</strong> {certificate.provider}
                        </Text>
                      )}
                      
                      {certificate.issueDate && (
                        <Text variant="body-default-s" onBackground="neutral-weak">
                          <strong>Issued:</strong> {certificate.issueDate}
                        </Text>
                      )}
                      {certificate.expireDate && (
                        <Text variant="body-default-s" onBackground="neutral-weak">
                          <strong>Expires:</strong> {certificate.expireDate}
                        </Text>
                      )}
                    </Column>
                  </Flex>
                ))}
              </Column>
            </>
          )}


          {/* {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )} */}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Flex fillWidth horizontal="space-between" wrap>
                      <Text variant="heading-strong-m">
                        <a href={institution.website} target="_blank" rel="noopener noreferrer">
                          {institution.name}
                        </a>
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {institution.startDate} - {institution.endDate}
                      </Text>
                    </Flex>
                    <Text variant="body-default-m">
                      {institution.course}
                    </Text>
                    {institution.cgpa && (
                      <Text variant="body-default-xs" onBackground="neutral-weak">
                        CGPA: {institution.cgpa}
                      </Text>
                    )}
                    <Text variant="body-default-m">{institution.description}</Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="4">
                    <Text variant="heading-strong-l">{skill.title}</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.images && skill.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            //@ts-ignore
                            minWidth={image.width}
                            //@ts-ignore
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              radius="m"
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )} */}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>

              <Column fillWidth gap="32">
                {about.technical.skills.map((group, index) => (
                  <Column
                    key={index}
                    style={{
                      border: '1px solid #d1d5db',
                      borderRadius: '12px',
                      padding: '15px'
                    }}
                    gap="20"
                  >
                    <Flex vertical="center" gap="16">
                      <img
                        src={`/images/skill_categories/${group.image}`}
                        alt={`${group.category} logo`}
                        //@ts-ignore
                        style={group.imageStyle}
                      />
                      <Text variant="heading-strong-m">{group.category}</Text>
                    </Flex>

                    <Flex wrap gap="12">
                      {group.items.map((skill, idx) => (
                        <Flex
                          key={idx}
                          vertical="center"
                          gap="8"
                          padding="8"
                          className="border-1 border-solid radius-l align-center Tag_tag__JeNYb Tag_neutral__3BOpF"
                          style={{ background: 'rgb(110 117 124 / 21%)', borderColor: 'darkgray', color: 'var(--neutral-on-background-strong)' }}
                        >
                          {skill.logo && (
                            <img
                              src={`/images/skills/${skill.logo}`}
                              alt={skill.name}
                              style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                            />
                          )}
                          <Text variant="body-default-s">{skill.name}</Text>
                        </Flex>
                      ))}
                    </Flex>
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Flex>
    </Column>
  );
}
