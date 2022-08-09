import React, {Component} from "react";
import Slider from "react-slick";
import testimonialData from '../../../data/Testimonials/home-two'
import quote from '../../../assets/img/icons/quote.png'
import SectionTitle from "../../UI/SectionTitle";

const NextArrow = ({className, onClick}) => {
    return <button className={className} onClick={onClick}><i className="fa fa-long-arrow-left"/></button>
};

const PrevArrow = ({className, onClick}) => {
    return <button className={className} onClick={onClick}><i className="fa fa-long-arrow-right"/></button>
};

class Testimonial extends Component {
  

    
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null,
            tdata:[]
        };
    }

    componentDidMount() {


        fetch("http://127.0.0.1:8000/counterss/")
           .then(res => res.json())
           .then(
             (result) => {
               this.setState({  tdata: result})
               console.log(result)
     //
               
             },
             (eror) => {
             }//*in the fetch paranthes you should write your request ip*\\
           )
     }

    render() {
        const testSettings = {
            slidesToShow: 1,
            swipeToSlide: true,
            focusOnSelect: true,
            className: "testimonial-content--2",
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>
        };

        return (
            <div className="testimonial-area testimonial-area--2 bg-offwhite sm-top">
                <div className="container">
                    <div className="row d-lg-none">
                        <div className="col-12 text-center">
                            <SectionTitle
                                title="دیدگاه مشتریان"
                                heading="دیدگاه مشتریان ما را بخوانید"
                                tagline="بیش از <span class='tag-no'>1900</span><strong> مشتری</strong>"
                            />
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <Slider
                                asNavFor={this.state.nav2}
                                ref={slider => (this.slider1 = slider)}
                                arrows={false}
                                className={`testimonial-thumbnail mt-sm-5 mt-md-1`}
                            >
                                {
                                    this.state.tdata.map(testimonial => (
                                        <div key={testimonial.id}>
                                            <div className="testimonial-thumbnail-item">
                                                <img
                                                    src={require('../../../assets/img/' + testimonial.authorThumb)}
                                                    alt="Businex-Testimonial"/>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>

                        <div className="col-md-7 ml-auto">
                            <div className="testimonial-area-right">
                                <div className="d-none d-lg-block">
                                    <SectionTitle
                                        title="دیدگاه مشتریان"
                                        heading="دیدگاه مشتریان ما را بخوانید"
                                        tagline="بیش از <span class='tag-no'>1900</span><strong> مشتری</strong>"
                                    />
                                </div>

                                <div className="testimonial-content-wrap pl-0">
                                    <Slider
                                        asNavFor={this.state.nav1}
                                        ref={slider => (this.slider2 = slider)}
                                        {...testSettings}
                                    >
                                        {
                                            this.state.tdata.map(testiItem => (
                                                <div key={testiItem.id}>
                                                    <div className="testimonial-item testimonial-item--2">
                                                        <div className="testimonial-txt">
                                                            <img src={quote} alt="بیزنکس"/>
                                                            <p>{testiItem.quote}</p>
                                                            <h5 className="client-name">{testiItem.author} | <span
                                                                className="designation">{testiItem.designation}</span>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonial;
