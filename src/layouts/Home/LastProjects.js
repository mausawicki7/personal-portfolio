import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import arubaClubImage from 'assets/arubaclub.png';
import arubaClubImageLarge from 'assets/arubaclub-large.png';
import cnImage from 'assets/cn247.png';
import cnImageLarge from 'assets/cn247-large.png';
import flipa from 'assets/flipa.png';
import flipaLarge from 'assets/flipa-large.png';
import salgado from 'assets/salgado.png';
import salgadoLarge from 'assets/salgado-large.png';
import chr from 'assets/chr.png';
import chrLarge from 'assets/chr-large.png';
import borderline from 'assets/borderline.png';
import borderlineLarge from 'assets/borderline-large.png';
import profileImg from 'assets/profile.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProfileText = ({ visible, titleId }) => (
  <>
    <div className={styles.tag} aria-hidden>
      <Divider
        notchWidth="64px"
        notchHeight="8px"
        collapsed={!visible}
        collapseDelay={1000}
      />
      <div className={styles.tagText} data-visible={visible}>
        03
      </div>
    </div>
    <Fragment>
      <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
        <DecoderText text="Mis últimos trabajos" start={visible} delay={500} />
      </Heading>
      <Text className={styles.descriptionworks} data-visible={visible} size="l" as="p">
        Aquí te muestro en los proyectos que estuve trabajando recientemente. Deslizá.
      </Text>
    </Fragment>
  </>
);

export const LastProjects = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <>
      <Section
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        as="section"
        id={id}
        ref={sectionRef}
        aria-labelledby={titleId}
        tabIndex={-1}
      >
        <Transition in={visible || focused} timeout={0}>
          {visible => (
            <div className={styles.content}>
              <div className={styles.column}>
                <ProfileText visible={visible} titleId={titleId} />
              </div>
            </div>
          )}
        </Transition>
      </Section>

      <Carousel responsive={responsive}>
        <div>
          <Link href={'https://arubaclub.com.ar'}>
            <Image
              reveal
              delay={100}
              placeholder={profileImgPlaceholder}
              srcSet={[arubaClubImageLarge, arubaClubImage]}
              sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
              alt="Aruba Life Club"
            />
          </Link>
        </div>
        <div>
          <Link href={'https://cn247.tv'}>
            <Image
              reveal
              delay={100}
              placeholder={profileImgPlaceholder}
              srcSet={[cnImageLarge, cnImage]}
              sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
              alt="CN 24/7"
            />
          </Link>
        </div>
        <div>
          <Link href={'https://flipagin.com.ar'}>
            <Image
              reveal
              delay={100}
              placeholder={profileImgPlaceholder}
              srcSet={[flipaLarge, flipa]}
              sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
              alt="Flipá Gin"
            />
          </Link>
        </div>
        <div>
          <Link href={'https://inmobiliariasalgado.com.ar'}>
            <Image
              reveal
              delay={100}
              placeholder={profileImgPlaceholder}
              srcSet={[salgadoLarge, salgado]}
              sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
              alt="Inmobiliaria Salgado"
            />
          </Link>
        </div>
        <div>
          <Link href={'https://chrargentina.com'}>
            <Image
              reveal
              delay={100}
              placeholder={profileImgPlaceholder}
              srcSet={[chrLarge, chr]}
              sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
              alt="CHR Argentina"
            />
          </Link>
        </div>
        <div>
          <Link href={'https://ivysoft.com.ar/borderline'}>
            <Image
              reveal
              delay={100}
              placeholder={profileImgPlaceholder}
              srcSet={[borderlineLarge, borderline]}
              sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
              alt="Borderline Custom Garage"
            />
          </Link>
        </div>
      </Carousel>
    </>
  );
};
