import type {AboutProfile} from '@/features/data/types.ts'
import {SectionHeading} from '@/shared/components/section-heading/SectionHeading'
import {useTranslation} from 'react-i18next'
import {Box, Text, SectionContainer, SectionCard} from '@/shared/components/ui'

export const AboutSection = ({about}: {
    about: AboutProfile
}) => {
    const {t} = useTranslation()

    const currentYear = new Date().getFullYear();
    const experienceYears = currentYear - 2012;
    const dynamicHeadline = about.headline.replace('{{years}}', experienceYears.toString());

    return (
        <SectionContainer id="about">
            <SectionHeading
                eyebrow={t('sections.about')}
                title={dynamicHeadline}
                description={about.description}
            />

            <Box flexDirection="column" gap="l">
                {about.focusAreas.map((item, index) => (
                    <SectionCard key={item}>
                        <Text
                            variant="heading"
                            color="accent"
                            fontWeight="bold"
                            fontSize={20}
                            lineHeight={1}
                        >
                            {String(index + 1).padStart(2, '0')}
                        </Text>
                        <Text color="text" fontSize={16} lineHeight={1.75} margin="none">
                            {item}
                        </Text>
                    </SectionCard>
                ))}
            </Box>
        </SectionContainer>
    )
}

