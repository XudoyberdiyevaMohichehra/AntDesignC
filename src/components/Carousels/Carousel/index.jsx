import { Carousel } from 'antd';
import antlogo from '../../../assets/imgs/loader.png'

const contentStyle = {
  margin: 0,
  height: '160px',
  width: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'blue',
};
const App = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
      <img  src={antlogo} alt="" />
        {/* <h3 style={contentStyle}>1</h3> */}
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};
export default App;