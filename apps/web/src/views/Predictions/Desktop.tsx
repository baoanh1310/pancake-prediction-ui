import { memo, useRef } from 'react'
import styled from 'styled-components'
import { Button, ChartIcon, Flex, Box } from '@pancakeswap/uikit'
import {
  useGetPredictionsStatus,
  useIsChartPaneOpen,
  useIsHistoryPaneOpen,
} from 'state/predictions/hooks'
import { PredictionsChartView, PredictionStatus } from 'state/types'
import { useTranslation } from '@pancakeswap/localization'
import { ErrorNotification, PauseNotification } from './components/Notification'
import History from './History'
import Positions from './Positions'
import LoadingSection from './components/LoadingSection'
import Menu from './components/Menu'


const SplitWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 24px 0;
  flex: 1;
  overflow: hidden;
`

const HistoryPane = styled.div<{ isHistoryPaneOpen: boolean; isChartPaneOpen: boolean }>`
  flex: none;
  overflow: hidden;
  transition: width 200ms ease-in-out;
  background: ${({ theme }) => theme.card.background};
  padding-bottom: ${({ isChartPaneOpen }) => (isChartPaneOpen ? 0 : '24px')};
  width: ${({ isHistoryPaneOpen }) => (isHistoryPaneOpen ? '384px' : 0)};
`

const StyledDesktop = styled.div`
  display: none;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
    height: calc(100vh - 100px);
  }
`

const PositionPane = styled.div`
  align-items: center;
  display: flex;
  max-width: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  & > div {
    flex: 1;
    overflow: hidden;
  }
`


const Desktop: React.FC<React.PropsWithChildren> = () => {
  const splitWrapperRef = useRef<HTMLDivElement>()
  const isHistoryPaneOpen = useIsHistoryPaneOpen()
  const isChartPaneOpen = useIsChartPaneOpen()
  const { t } = useTranslation()
  const status = useGetPredictionsStatus()

  return (
    <>
      <StyledDesktop>
        <SplitWrapper ref={splitWrapperRef}>
          <PositionPane>
            {status === PredictionStatus.ERROR && <ErrorNotification />}
            {status === PredictionStatus.PAUSED && <PauseNotification />}
            {[PredictionStatus.INITIAL, PredictionStatus.LIVE].includes(status) && (
              <Box>
                <Menu />
                {status === PredictionStatus.LIVE ? <Positions /> : <LoadingSection />}
              </Box>
            )}
          </PositionPane>

        </SplitWrapper>
        <HistoryPane isHistoryPaneOpen={isHistoryPaneOpen} isChartPaneOpen={isChartPaneOpen}>
          <History />
        </HistoryPane>
      </StyledDesktop>
    </>
  )
}

export default memo(Desktop)
