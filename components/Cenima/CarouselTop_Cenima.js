import React, { Component } from 'react'
import { url } from '../../variables/general'
import { connect } from 'react-redux'


class CarouselTop_Cenima extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoading: false
        }
    }
    
    render() {
        const { data } = this.props
        if(!data || data.length === 0)
        {
            return <div className="text-center">Loading fail ...</div>
        }
        else
        {
            return (
                <div className="adonis-carousel mb-3" data-auto-width="yes" data-loop="yes" data-center="yes" data-dots="yes" data-responsive-width="0:70%|600:580px">
                    <div className="gutter-30">
                        <div className="owl-carousel owl-theme-adonis" style={{cursor: "grab"}}>
                            {
                                !data || data.length === 0 ? "" : data.map((prop, key) => (
                                    <div key={key} className="item">
                                        <div className="radio">
                                            <div className="img-box-text-over lg box-rounded-lg">
                                                <a href={`/detail/${prop.key}`}>
                                                    <img className="resize1" style={{ height: 380 }} src={url + prop.imageMain || ""} data-2x="assets/images/store/store-featured-01@2x.jpg" alt="" />
                                                    <div className="absolute-info">
                                                        <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                            <span className="adonis-highlight-dark">{prop.title}</span>
                                                            <span className="adonis-highlight-dark">{`Tập ${prop.episodes || ""}`}</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        data: state.carousel_Cenima
    };
}

export default connect(mapStateToProps) (CarouselTop_Cenima);