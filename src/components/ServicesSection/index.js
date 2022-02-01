import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const ServicesSection = () => {
  return(
      <ServicesContainer id='services'>
          <ServicesH1>Our Services</ServicesH1>
          <ServicesWrapper>
              <ServicesCard>
                  <ServicesIcon src={Icon1} />
                  <ServicesH2>Phasellus lacinia</ServicesH2>
                  <ServicesP>Fusce fringilla consectetur nunc, a finibus turpis feugiat non.</ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon2} />
                  <ServicesH2>Duis gravida</ServicesH2>
                  <ServicesP>Praesent quis eros nec dui aliquam mattis at vel elit. Cras interdum faucibus lorem eu ornare.</ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon3} />
                  <ServicesH2>Phasellus vel</ServicesH2>
                  <ServicesP>Pellentesque interdum vestibulum nulla, eu faucibus nunc aliquam semper.</ServicesP>
              </ServicesCard>
          </ServicesWrapper>
      </ServicesContainer>
  );
};

export default ServicesSection;
