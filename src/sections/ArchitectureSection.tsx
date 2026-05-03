import {SectionHeading} from '@/shared/components/section-heading/SectionHeading';
import {Box, SectionContainer, Text} from '@/shared/components/ui';
import type {ArchitectureHighlight} from '@/features/data/types';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';

export const ArchitectureSection = ({
                                        highlights,
                                    }: { highlights: ArchitectureHighlight[] }) => {
    const {t} = useTranslation();
    const [hoveredCard, setHoveredCard] = useState<string | null>(null)

    return (
        <SectionContainer id="architecture">
            <SectionHeading
                eyebrow={t('sections.architecture')}
                title={t('architecture.title')}
                description={t('architecture.description')}
            />

            <Box display={'grid'} style={{gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'} as any} gap={'2rem'}>
                {highlights.map((item, i) => (
                    <Box
                        key={`architect_${i}`}
                        position="relative"
                        padding="m"
                        borderWidth={1}
                        borderColor="surfaceStrong"
                        style={{
                            padding: '1rem',
                            background: hoveredCard === item.title ? 'rgba(220, 38, 38, 0.02)' : 'transparent',
                            borderColor:
                                hoveredCard === item.title ? 'rgba(220, 38, 38, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                            transition: 'all 0.3s ease',
                        } as any}
                        {...({
                            onMouseEnter: () => setHoveredCard(item.title),
                            onMouseLeave: () => setHoveredCard(null),
                        } as any)}
                    >
                        <Box
                            position="absolute"
                            top={0}
                            left={0}
                            width="100%"
                            style={{
                                height: '2px',
                                background: 'var(--accent)',
                                transform: `scaleX(${hoveredCard === item.title ? 1 : 0})`,
                                transformOrigin: 'left',
                                transition: 'transform 0.3s ease',
                            } as any}
                        />
                        <Box display={'flex'} flexDirection={'row'} gap={'1rem'} marginBottom={'1rem'}
                             alignItems={'center'}>
                            <Box
                                aria-hidden={true}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                style={{
                                    width: '3.25rem',
                                    height: '3.25rem',
                                    minWidth: '3.25rem',
                                    minHeight: '3.25rem',
                                    maxWidth: '3.25rem',
                                    maxHeight: '3.25rem',
                                    flexShrink: 0,
                                    background:
                                        'radial-gradient(circle at 30% 30%, rgba(220, 38, 38, 0.22), rgba(220, 38, 38, 0.08))',
                                    color: 'var(--accent)',
                                    borderRadius: '50%',
                                    fontSize: '1.1rem',
                                    border: '1px dashed var(--accent)',
                                    boxShadow:
                                        hoveredCard === item.title
                                            ? '0 12px 24px rgba(220, 38, 38, 0.22)'
                                            : '0 8px 20px rgba(220, 38, 38, 0.16)',
                                    transform: hoveredCard === item.title ? 'translateY(-2px) scale(1.03)' : 'none',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    lineHeight: 1,
                                } as any}
                            >
                                {item.icon}
                            </Box>
                            <Text variant={'h3'}>{item.title}</Text>
                        </Box>
                        <Text>{item.description}</Text>
                    </Box>
                ))}
            </Box>
        </SectionContainer>
    )
}

