import styled from 'styled-components'

export const Section = styled.section`
  scroll-snap-align: start;
  justify-content: center;
  align-items: center;
  height: 80vh;
`
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: ${hue => hsl({hue},50%, 50%)};
  height: calc(100vh);
  margin:0
  padding:0
`
const styles = {
  App: { text_align: "center" },
  link: { textDecoration: "none", color: "blue" },
  nav: { border: "1px solid blue" },
  home: { border: "1px solid red" },
  about: { border: "1px solid blue" }
};



export default styles