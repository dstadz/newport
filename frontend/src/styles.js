import styled from 'styled-components'

export const Section = styled.section`
height:100vh;
scroll-snap-align: start;
justify-content: center;
align-items: center;
`


const styles = {
  App: {
    text_align: "center"
  },
  link: { textDecoration: "none", color: "blue" },
  nav: { border: "1px solid blue" },
  home: { border: "1px solid red" },
  about: { border: "1px solid blue" }
};

export default styles