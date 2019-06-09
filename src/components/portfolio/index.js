import React from 'react';

const Portfolio = (props) => {
    return (
        <section className={`portfolio_area ${props.topSpacing ? "section_gap_top":""}`} id="portfolio">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="main_title text-left">
                        <h2>quality work <br/>
                            Recently done project </h2>
                    </div>
                </div>
            </div>
            <div className="filters portfolio-filter">
                <ul>
                    <li className="active" data-filter="*">all</li>
                    <li data-filter=".popular">popular</li>
                    <li data-filter=".latest"> latest</li>
                    <li data-filter=".following">following</li>
                    <li data-filter=".upcoming">upcoming</li>
                </ul>
            </div>
    
            <div className="filters-content">
				<div className="row portfolio-grid justify-content-center">
					<div className="col-lg-4 col-md-6 all latest">
						<div className="portfolio_box">
							<div className="single_portfolio">
								<img className="img-fluid w-100" src="img/portfolio/p1.jpg" alt=""/>
								<div className="overlay"></div>
								<a href="img/portfolio/p1.jpg" className="img-gal">
									<div className="icon">
										<span className="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div className="short_info">
								<h4><a href="portfolio-details.html">minimal design</a></h4>
								<p>Animated, portfolio</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 all popular">
						<div className="portfolio_box">
							<div className="single_portfolio">
								<img className="img-fluid w-100" src="img/portfolio/p2.jpg" alt=""/>
								<div className="overlay"></div>
								<a href="img/portfolio/p2.jpg" className="img-gal">
									<div className="icon">
										<span className="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div className="short_info">
								<h4><a href="portfolio-details.html">Paint wall</a></h4>
								<p>Animated, portfolio</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 all latest">
						<div className="portfolio_box">
							<div className="single_portfolio">
								<img className="img-fluid w-100" src="img/portfolio/p3.jpg" alt=""/>
								<div className="overlay"></div>
								<a href="img/portfolio/p3.jpg" className="img-gal">
									<div className="icon">
										<span className="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div className="short_info">
								<h4><a href="portfolio-details.html">female light</a></h4>
								<p>Animated, portfolio</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 all popular">
						<div className="portfolio_box">
							<div className="single_portfolio">
								<img className="img-fluid w-100" src="img/portfolio/p4.jpg" alt=""/>
								<div className="overlay"></div>
								<a href="img/portfolio/p4.jpg" className="img-gal">
									<div className="icon">
										<span className="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div className="short_info">
								<h4><a href="portfolio-details.html">fourth air</a></h4>
								<p>Animated, portfolio</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 all following">
						<div className="portfolio_box">
							<div className="single_portfolio">
								<img className="img-fluid w-100" src="img/portfolio/p6.jpg" alt=""/>
								<div className="overlay"></div>
								<a href="img/portfolio/p5.jpg" className="img-gal">
									<div className="icon">
										<span className="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div className="short_info">
								<h4><a href="portfolio-details.html">together sign</a></h4>
								<p>Animated, portfolio</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 all upcoming">
						<div className="portfolio_box">
							<div className="single_portfolio">
								<img className="img-fluid w-100" src="img/portfolio/p5.jpg" alt=""/>
								<div className="overlay"></div>
								<a href="img/portfolio/p6.jpg" className="img-gal">
									<div className="icon">
										<span className="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div className="short_info">
								<h4><a href="portfolio-details.html">multiply fowl</a></h4>
								<p>Animated, portfolio</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 all upcoming following">
						<div className="portfolio_box">
							<div className="single_portfolio">
								<img className="img-fluid w-100" src="img/portfolio/p7.jpg" alt=""/>
								<div className="overlay"></div>
								<a href="img/portfolio/p7.jpg" className="img-gal">
									<div className="icon">
										<span className="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div className="short_info">
								<h4><a href="portfolio-details.html">green heaven</a></h4>
								<p>Animated, portfolio</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 all following">
						<div className="portfolio_box">
							<div className="single_portfolio">
								<img className="img-fluid w-100" src="img/portfolio/p8.jpg" alt=""/>
								<div className="overlay"></div>
								<a href="img/portfolio/p8.jpg" className="img-gal">
									<div className="icon">
										<span className="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div className="short_info">
								<h4>fly male</h4>
								<p>Animated, portfolio</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 all upcoming">
						<div className="portfolio_box">
							<div className="single_portfolio">
								<img className="img-fluid w-100" src="img/portfolio/p9.jpg" alt=""/>
								<div className="overlay"></div>
								<a href="img/portfolio/p9.jpg" className="img-gal">
									<div className="icon">
										<span className="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div className="short_info">
								<h4><a href="portfolio-details.html">season face</a></h4>
								<p>Animated, portfolio</p>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
    </section>
    );
}

export default Portfolio;