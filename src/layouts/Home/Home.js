import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';
import sliceTextureLarge from 'assets/slice-app-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/slice-app.jpg';
import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Divider } from '../../components/Divider/Divider';
import { Button } from 'components/Button';
import { LastProjects } from './LastProjects';

const disciplines = ['React', 'CSS', 'HTML', 'Javascript', 'Wordpress'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const proyectos = useRef();
  const detalles = useRef();
  const placeholderImg =
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAICAgICAQICAgIDAgIDAwYEAwMDAwcFBQQGCAcJCAgHCAgJCg0LCQoMCggICw8LDA0ODg8OCQsQERAOEQ0ODg7/2wBDAQIDAwMDAwcEBAcOCQgJDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg7/wgARCAASACADAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAABAUHBgn/xAAZAQEAAwEBAAAAAAAAAAAAAAAFAwQGAgj/2gAMAwEAAhADEAAAAOanpHEuRHdAjSk8GcqnLA1RdO5nscBYolLViNGLY7CLKMf/xAAjEAABBAEDBAMAAAAAAAAAAAABAAIDBAUSFFETJTIzNILB/9oACAEBAAE/AIYbMngCVRZJXnDpAsndbNhXNPCezuTtPKw23ZS1PaFfmjfaIjCyU5Zj3KkepkTq5VX4CPvKynoKxwG6+w/V/8QAGxEAAwADAQEAAAAAAAAAAAAAAAECAwQRMhL/2gAIAQIBAT8AzpRBirtDxfSJxSmbGwrniNaX0u5xwVtLpJgNryyvR//EABwRAAMAAwEBAQAAAAAAAAAAAAABAgMEESEyE//aAAgBAwEBPwDXzu74U0kXsJTwzW6fhp6lRXWZ/nwvFdMxaN0Sl+Y/sSRrpcP/2Q==';

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, proyectos, detalles];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Designer + Developer"
        description="Design portfolio of Mauricio Sawicki — a Front-End Developer"
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="desarrolloweb"
        sectionRef={projectOne}
        buttonText={'Ver más'}
        buttonLink={'#appdevelopment'}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Apasionado por el diseño y desarrollo web."
        description="MausaDev es el reflejo de mi ilusión por crecer como profesional 
        dentro de la industria del desarrollo web. Como freelance, 
        me especializo en el desarrollo Front-End."
        model={{
          type: 'laptop',
          alt: 'Mauricio Sawicki FrontEnd Developer',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="appdevelopment"
        alternate
        sectionRef={projectTwo}
        buttonText={'Ver proyectos'}
        buttonLink={'#proyectos'}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Desarrollo aplicaciones web modernas y adaptables."
        description="He creado más de 10 webapps como freelance. 
        Siempre intento estar al día para así poder aplicar los mejores recursos a mis desarrollos.
        Ofrezco soluciones innovadoras que aportan valor a las empresas y negocios."
        model={{
          type: 'phone',
          alt: 'Apps made by Mauricio Sawicki',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      {/* <Button iconHoverShift href="#detalles" iconEnd="arrowRight">
        asd
      </Button> */}

      <LastProjects
        sectionRef={proyectos}
        visible={visibleSections.includes(proyectos.current)}
        id="proyectos"
      />

      <Section id="detalles" sectionRef={detalles}>
        {/* <Text>{'asdasdasdas'}</Text> */}
        {/* <Button secondary iconHoverShift icon="chevronRight" as="div">
          Read article
        </Button> */}
      </Section>

      <Profile
        sectionRef={detalles}
        visible={visibleSections.includes(detalles.current)}
        id="detalles"
      />
      <Footer />
    </div>
  );
};
