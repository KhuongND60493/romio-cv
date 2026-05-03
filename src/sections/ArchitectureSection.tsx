import {SectionHeading} from '@/shared/components/section-heading/SectionHeading';
import {Box, SectionContainer, Text} from '@/shared/components/ui';
import type {ArchitectureHighlight} from '@/features/data/types';
import type { ComponentType } from 'react';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import styles from './ArchitectureSection.module.css';
import {
    FaBoxesStacked,
    FaChartLine,
    FaDatabase,
    FaGaugeHigh,
    FaLayerGroup,
    FaNetworkWired,
    FaShuffle,
    FaTimeline,
} from 'react-icons/fa6';

const architectureIconMap: Record<string, ComponentType> = {
    MS: FaBoxesStacked,
    EV: FaShuffle,
    GW: FaNetworkWired,
    DB: FaDatabase,
    BJ: FaTimeline,
    CA: FaLayerGroup,
    OB: FaChartLine,
    SR: FaGaugeHigh,
};

export const ArchitectureSection = ({
                                        highlights,
                                    }: { highlights: ArchitectureHighlight[] }) => {
    const {t} = useTranslation();
    const [hoveredCard, setHoveredCard] = useState<string | null>(null)

    return (
        <SectionContainer id="architecture">
            <SectionHeading
                eyebrow={`🏗️ ${t('sections.architecture')}`}
                title={t('architecture.title')}
                description={t('architecture.description')}
            />

            <Box className={styles.grid}>
                {highlights.map((item, i) => {
                    const Icon = architectureIconMap[item.icon] ?? FaLayerGroup
                    return (
                        <Box
                            key={`architect_${i}`}
                            position="relative"
                            className={styles.card}
                            style={{
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
                            <Box className={styles.row}>
                                <Box
                                    aria-hidden={true}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    style={{
                                        flexShrink: 0,
                                        color: 'var(--accent)',
                                        fontSize: hoveredCard === item.title ? '2rem' : '1.85rem',
                                        transform: hoveredCard === item.title ? 'translateY(-1px)' : 'none',
                                        transition: 'transform 0.25s ease, font-size 0.25s ease',
                                        lineHeight: 1,
                                    } as any}
                                >
                                    <Icon />
                                </Box>
                                <Text variant="h4" fontSize={{phone: 18, tablet: 22}}>
                                    {item.title}
                                </Text>
                            </Box>
                            <Text fontSize={{phone: 14, tablet: 16}} lineHeight={{phone: 22, tablet: 24}}>
                                {item.description}
                            </Text>
                        </Box>
                    )
                })}
            </Box>
        </SectionContainer>
    )
}

