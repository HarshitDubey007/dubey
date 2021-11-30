import { Link } from 'react-router-dom';
import '../Home/style.css'
const Home = () => {
    return (
        <>
        <div >
            <section className="hero py-16">
            <div>
                <div className="container mx-auto center flex justify-between">
                    <div className="w-1/2">
                        <h6 className="text-lg"><em>Your Wedding, Your Happness</em></h6>
                        <h1 className="text-6xl font-bold">Exclusive events, priceless memories </h1>
                        <button className="explor px-6 py-2 rounded-full text-white font-bold mt-4 btn-primary">Explor Now</button>
                    </div>
                    <div className="w-1/2">
                        <img src="../images/front.jpg" alt="" />
                    </div>
                </div>
            </div>   
            </section>
            <section className="categories container mx-auto py-8 ">
            <h1 className="text-4xl font-bold">Wedding Categories</h1>
            <div className="grid px-4 py-6 grid-cols-3 gap-x-12 gap-y-16">
            <div className="w-64">
                <div className="text-center">
                    <h1 className="text-2xl py-2">Venues</h1>
                    <img className="h-40 mb-4 mx-auto" src="../../images/vanu.jpg" alt="" />
                    <ul>
                        <li><Link to="">Banquet Halls        </Link></li>
                        <li><Link to="">Lawns / Farmhouses   </Link></li>
                        <li><Link to="">Resorts              </Link></li>   
                        <li><Link to="">Small Function Halls </Link></li>
                        <li><Link to="">Destination Wedding  </Link></li>
                        <li><Link to="">Kalyan Mandapam      </Link></li>
                        <li><Link to="">4 Star Above Hotels</Link></li>
                    </ul>
                </div>     
                </div>
                <div className="w-64">
                    <div className="text-center">
                        <h1 className="text-2xl py-2">Photography</h1>
                        <img className="h-40 mb-4 mx-auto" src="images/photo.jpg" alt="" />
                        <ul>
                            <li><Link to=""> Photographers     </Link></li>
                            <li><Link to=""> Cinema/Video      </Link></li>
                            <li><Link to=""> Pre Wedding Shoot </Link></li>   
                        </ul>
                    </div>
                </div>
                
                <div className="w-64">
                    <div className="text-center">
                        <h1 className="text-2xl py-2">Bridal Wear</h1>
                        <img className="h-40 mb-4 mx-auto" src="/images/bwear.jpg" alt="" />
                        <ul>
                            <li><Link to=""> Bridal Lehengas          </Link></li>
                            <li><Link to=""> Kanjeevaram / Silk Sarees</Link></li> 
                            <li><Link to=""> Cocktail Gowns           </Link></li>
                            <li><Link to=""> Trousseau Sarees         </Link></li>
                            <li><Link to=""> Bridal Lehenga on Rent   </Link></li>
                            <li><Link to=""> Virtual Shopping Service </Link></li>
                        </ul>
                    </div>
                </div>
                <div className="w-64">
                    <div className="text-center">
                        <h1 className="text-2xl py-2">Groom Wear</h1>
                        <img className="h-40 mb-4 mx-auto" src="/images/gwear.png" alt="" />
                        <ul>
                            <li><Link to="">Sherwani             </Link></li>
                            <li><Link to="">Wedding Suits / Tuxes</Link></li>
                            <li><Link to="">Sherwani On Rent     </Link></li>
                        </ul>
                    </div>
                </div>
                <div className="w-64">
                    <div className="text-center">
                        <h1 className="text-2xl py-2">Mehndi</h1>
                        <img className="h-40 mb-4 mx-auto" src="/images/mehndi.jpg" alt="" />
                        <ul>
                            <li><Link to="">Mehendi Artist</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="w-64">
                    <div className="text-center">
                        <h1 className="text-2xl py-2">Makeup</h1>
                        <img className="h-40 mb-4 mx-auto" src="/images/makeup.jpg" alt="" />
                        <ul>
                            <li><Link to=""> Bridal Makeup </Link></li>
                            <li><Link to=""> Family Makeup </Link></li> 
                        </ul>
                    </div>
                </div>        
            </div>
</section>
        </div>
        </>
    )
}

export default Home;