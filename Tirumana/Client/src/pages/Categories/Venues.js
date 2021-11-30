import React from 'react'
import { Link } from 'react-router-dom';
function Venues() {
    return (
        <div>
            <section class="categories container mx-auto py-8 ">
                    <h1 class="text-xl font-bold">Wedding Venues</h1>
                    <span class="text-2xs">Showing <span class="font-bold">25061 results</span> as per your search criteria</span>
                <div class="grid px-4 py-6 grid-cols-4 gap-x-12 gap-y-16">
                <div class="w-64">
                <img class="h-40 mb-4 mx-auto" src="../../images/vanu.jpg" alt="" />
                <div class="text-center">
                    <div class="flex item-center justify-around mt-6">
                        <span class="font-bold text-lg">Banquet Halls</span>
                        <span class="reating px-2 rounded ml-8">★ 4.9</span>
                    </div>
                    <div class="flex item-center justify-around">
                        <span class="py-1 rounded-full uppercase text-xs">North Bangalore</span>
                        <span class="py-1 ml-6 rounded-full uppercase text-xs">6 reviews</span>
                    </div>
                    <div class="detail flex item-center justify-around mt-6">
                        <span class="font-bold">750 per plate</span>
                        <Link to="">
                            <button class="ml-6 py-1 rounded-full flex item-center font-bold">
                                Detail                         
                            </button>
                        </Link> 
                    </div>
                </div>  
            </div> 
                </div>
            </section>
        </div>
    )
}

export default Venues
