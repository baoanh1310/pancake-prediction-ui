import { ReactElement, useMemo } from 'react'
import shuffle from 'lodash/shuffle'
import PerpetualBanner from '../PerpetualBanner'
import useIsRenderIfoBanner from './useIsRenderIFOBanner'

interface IBannerConfig {
  shouldRender: boolean
  banner: ReactElement
}

/**
 * make your custom hook to control should render specific banner or not
 * add new campaign banner easily
 *
 * @example
 * ```ts
 *  {
 *    shouldRender: isRenderIFOBanner,
 *    banner: <IFOBanner />,
 *  },
 * ```
 */
export const useMultipleBannerConfig = () => {
  const isRenderIFOBanner = useIsRenderIfoBanner()

  return useMemo(() => {

    const SHUFFLE_BANNERS: IBannerConfig[] = [
      
      {
        shouldRender: true,
        banner: <PerpetualBanner />,
      },
    ]
    return [...shuffle(SHUFFLE_BANNERS)]
      .filter((bannerConfig: IBannerConfig) => bannerConfig.shouldRender)
      .map((bannerConfig: IBannerConfig) => bannerConfig.banner)
  }, [isRenderIFOBanner])
}
