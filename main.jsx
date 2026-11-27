import React,{useState,useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';
const ROOT = '/images/';
const galleryFiles=['imgi_2_20131005_155841-1-640x480_c.jpg','imgi_3_20131005_155848-1-640x480_c.jpg','imgi_4_20131011_120143-1-640x480_c.jpg','imgi_5_20131119_181900-1-640x480_c.jpg','imgi_6_20140617_182522-1-640x480_c.jpg','imgi_7_14133169198_bc3c4d575e_b-640x480_c.jpg','imgi_8_imperial-pics-038-640x480_c.jpg','imgi_9_i-phone-pics-172-640x480_c.jpg','imgi_10_i-phone-pics-189-640x480_c.jpg','imgi_11_i-phone-pics-234-640x480_c.jpg','imgi_12_i-phone-pics-247-640x480_c.jpg','imgi_13_i-phone-pics-248-640x480_c.jpg','imgi_14_i-phone-pics-256-640x480_c.jpg','imgi_15_i-phone-pics-260-640x480_c.jpg','imgi_16_i-phone-pics-288-640x480_c.jpg','imgi_17_i-phone-pics-296-1-640x480_c.jpg','imgi_18_i-phone-pics-301-640x480_c.jpg','imgi_19_i-phone-pics-and-videos-136-640x480_c.jpg','imgi_20_P1010469-640x480_c.jpg','imgi_21_P1020072-640x480_c.jpg'];
const services=[
['Epoxy Coating','epoxy-coating','Garage floors and industrial warehouses , kitchens and any other place where there is concrete that you would like to coat!'],
['Installations','installations','We can repair or install new interlocking projects to fit your budget. We use heavy equipment, And back all our work with a outstanding warranty to give you the peace of mind you deserve! Call us for a consultation to help design your next landscape dream!'],
['Interlock/Natural Stone','interlock-natural-stone','We use extremely high pressure to blast out weeds and when needed plant friendly chemicals to remove stains, polymeric sand is then applied to help stabilize paving stones, and to help lock out the weeds from coming back, different finishes are available ranging from natural look to semi gloss to high gloss, all of which are non slip!'],
['Repairs','repairs','We do all repairs ranging from lift and relay of 10 sqft to what ever size you need to have repaired. we use heavy compacting equipment to ensure you wont have to redo the job again!!'],
['Stamped Concrete','stamped-concrete','We use different repair techniques to address different problems,with some cracks we can make them virtually disappear, Pitting is another common problem that we fix, deicing materials from the road will penetrate the concrete on warm winter days and then freeze when the temperature falls, leaving holes or “pits” in your concrete. by using special techniques we can repair that damage and restore the concrete.'],
['Interlocking Pavers','interlocking-pavers','Founded on building and maintaining high-quality outdoor construction projects, Imperial Sealing is proud to provide a wide range of construction and maintenance services for interlocking pavers. Whether you plan to install a new patio or revitalize an existing hardscape surface with our interlock lift and relay services, we’re here to help with cost-effective solutions that add significant value and curb appeal.'],
['Pothole Repair','pothole-repair','Imperial Sealing provides quick and reliable pothole repair services that will not only solve your pothole issue but will prevent further damage. Using only the industry’s finest materials, you can rest assured that your repair will remain in-tact for years to come.'],
['Parking Lot Repair','parking-lot-repair','You’ve invested a lot into your parking lot—get the most out of it with Imperial Sealing’s tried and tested parking lot repairs. Whether it is pothole repair, asphalt crack filler, or general asphalt repair, we specialize in providing value-packed parking lot repair services at competitive prices.'],
['Parking Lot Paving','parking-lot-paving','Imperial Sealing is your go-to parking lot paving contractor in the local area. We offer state-of-the-art paving solutions from small crack repairs to accessibility improvements, we do it all. When you choose us for your parking lot paving, you’ll benefit from improved convenience, safety, and curb appeal for your commercial or residential property.'],
['Asphalt Maintenance','asphalt-maintenance','Thorough asphalt maintenance is crucial to preserving the life of asphalt surfaces. If you’re looking for an asphalt routine maintenance company that genuinely understands the benefits of repairing or replacing your asphalt surface, you are in the right place.'],
['Asphalt Repair','asphalt-repair','Maintain your driveway, car parking lot, or other asphalt surfaces with Imperial Sealing. We’ll make sure it is safe and pristine with our superior asphalt repair services. Our asphalt contractors provide local property owners with seamless asphalt repair solutions for cracks, potholes, sunken spots, and more!'],
['Concrete Driveways','concrete-driveways','At Imperial Sealing, we specialize in the design and installation of concrete driveways and offer a multitude of finishes, such as stamped concrete, colored concrete, and polished concrete. We understand that driveways are an essential feature of one’s property, and our team works hard to create a look and style that will become yours uniquely.'],
['Concrete Repair','concrete-repair','Your concrete is vital to the structural integrity of your residential or commercial property. The team at Imperial Sealing can handle a wide variety of concrete repairs as well as structural repairs. When it comes to finding a concrete repair company, you can trust that we are the leading team in the industry.'],
['Concrete Leveling','concrete-leveling','At Imperial Sealing, you can rely on our knowledge and experience to provide you with concrete solutions that are best suited to your circumstance, and that will yield the best results.'],
['Concrete Removal','concrete-removal','Imperial Sealing has been at the forefront of the concrete industry for many years, providing comprehensive concrete removal services for industrial, commercial, and residential clients. With the work of our contractors, your concrete will be removed efficiently without risk to your site or surrounding properties. We work meticulously to reduce unwanted pollution during the removal.'],
['Concrete Stairs','concrete-stairs','Concrete has become the preferred material for contractors when it comes to foundations, driveways, and patios. Due to its longevity, durability, and low-maintenance, concrete is a reliable building material. Investing in a concrete stairway will guarantee a long-lasting product that will stand the test of time.'],
['Concrete Walkways','concrete-walkways','Having a walkway made of concrete adds a noticeable finish and flow to an existing path in your landscape. Provided that they are easy to maintain and extremely durable, it is a great touch to add to the exterior of your property.'],
['Garage Concrete','garage-concrete','Are you looking to renovate your garage? Look no further! At Imperial Sealing, we bring garage floors to life. We specialize in turning old and dull garage floors into attractive and durable surfaces that are easy to maintain.'],
['Decorative Concrete','decorative-concrete','The transformation of plain concrete into decorative concrete is truly remarkable. This can be obtained by using several materials and methods to achieve brilliant results. The choice is ultimately yours. With a wide variety of colors and patterns to choose from, it has never been easier to convert your faded concrete flooring into something that will stand out.'],
['Stucco Installation','stucco-installation','Looking for high-quality stucco work from trained experts? We’ll give you the top-notch work you need at prices that can’t be beat. Plus, we’ll give you the friendly smiles and good attitudes that you need to make the experience a good one.'],
['Stucco Repair','stucco-repair','Need safe, efficient, and reliable stucco work by trained and skilled experts? We’re more than just contractors—we’re committed and dedicated professionals who make it our business to give you attractive, sturdy, and long-lasting stucco repairs.'],
['Retaining Wall Services','retaining-wall-services','Interlock retaining walls are an excellent way to maintain and protect your property from disaster. At Imperial Sealing, we use natural and manufactured stones, bricks, and blocks to build durable and robust walls. Using our creative touch, we design protective and decorative walls in various patterns and shapes to suit different yard requirements, styles, and designs.']
];

const image=(name,alt,klass='')=>'<img class="'+klass+'" src="'+ROOT+encodeURIComponent(name)+'" data-file="'+name+'" alt="'+alt+'" loading="lazy">';
const h=(title,desc,trail='HOME / SERVICES')=>'<section class="page-hero"><span class="eyebrow">'+trail+'</span><h1>'+title+'</h1><p>'+desc+'</p></section>';
const button=(label='GET A FREE QUOTE',href='/contact-us/')=>'<a class="rounded-link" href="'+href+'">'+label+' <b>↗</b></a>';
const quote=()=>'<section class="quote-section"><div><span class="eyebrow dark">YOUR NEXT PROJECT STARTS HERE</span><h2>Make your first<br>impression last.</h2></div>'+button()+'</section>';
const serviceList=()=>services.map((s,i)=>'<a class="service-row reveal" href="/services/'+s[1]+'/"><span>'+s[0]+'</span><b>↗</b></a>').join('');
function home(){return '<section class="hero"><span class="eyebrow">PRECISION / PROTECTION / PERFORMANCE</span><h1>BUILT FOR<br><em>WHAT’S</em><br>NEXT<span style="color:var(--acid)">.</span></h1><div class="hero-intro"><p>Thoughtful restoration, precision paving, and outdoor surfaces made to last. Ontario craftsmanship, reimagined.</p>'+button('EXPLORE SERVICES','/services/')+'</div><div class="hero-bottom"><span class="signal">NORTH YORK · MISSISSAUGA · VAUGHAN</span><span class="scroll-note">SCROLL TO EXPLORE ↓</span></div><div class="hero-photo">'+image('imgi_2_slide-01.jpg','Completed interlock driveway','hero-image')+'</div></section><section class="marquee"><div> BUILT TO LAST ✳ DESIGNED TO IMPRESS ✳ SEALING ✳ CONCRETE ✳ INTERLOCK ✳ BUILT TO LAST ✳ DESIGNED TO IMPRESS ✳ SEALING ✳ CONCRETE ✳ INTERLOCK ✳ </div></section><section class="wrap light"><div class="section-head"><div><span class="eyebrow dark">01 / WHAT WE DO</span><h2>Every surface.<br><em>Every detail.</em></h2></div><p>From first installation to finishing touch, we create and restore exterior spaces that stand the test of time.</p></div><div class="services-grid">'+[5,4,10,11,1,6].map((id,i)=>'<a class="service-card reveal '+(i===0?'featured':'')+'" href="/services/'+services[id][1]+'/"><span class="card-no">0'+(i+1)+' / SERVICE</span><h3>'+services[id][0]+'</h3><span class="card-arrow">↗</span></a>').join('')+'</div><div style="text-align:right;margin-top:38px">'+button('EXPLORE ALL SERVICES','/services/')+'</div></section><section class="wrap"><div class="section-head"><div><span class="eyebrow">02 / SELECTED WORK</span><h2>The work<br><em>speaks.</em></h2></div>'+button('VIEW GALLERY','/gallery/')+'</div><div class="feature-photos">'+image('imgi_16_i-phone-pics-288-640x480_c.jpg','Imperial Sealing completed interlock driveway')+image('imgi_12_i-phone-pics-247-640x480_c.jpg','Imperial Sealing custom poolside stone paving')+image('imgi_8_imperial-pics-038-640x480_c.jpg','Circular stone paving and natural boulders')+'</div></section><section class="wrap light story"><div class="story-visual">'+image('why-imperial-sealing.jpg','Interlock paving on a completed outdoor patio')+'</div><div class="story-copy"><span class="eyebrow dark">03 / WHY IMPERIAL SEALING</span><h2>Expertise you<br>can <em>see.</em></h2><p>A proper maintenance program can assure that your investment remains looking like new. Things like ultraviolet radiation can age a unprotected surface, and If that doesn’t do it then leave it to the vehicles that track road salt onto driveways and parking lots to add to the problem. Along with other common things like, oil, anti-freeze, bird droppings, efflorescence stains, moss, weeds, and insects.</p><p>Let the professionals at Imperial Sealing save you the time and aggravation and help out and recommend the perfect maintenance package tailored to your budget.</p>'+button('REQUEST A CONSULTATION')+'</div></section><section class="wrap light"><span class="eyebrow dark">04 / OUR GOAL</span><h2>Every detail<br>matters.</h2><p class="big-paragraph">At Imperial Sealing were dedicated to excellence and total customer satisfaction in the service industry. We provide service in Outdoor Contracting, design and build of hard scape, Stamped concrete restoration &amp; Interlock restoration, Sealing for any outdoor surface, Snow removal contracting.</p><p>For more information on our services, or to request a quick and professional quote, please review our services below.</p><h3>Authorized Contractors</h3><div class="partner-logos">'+image('imgi_8_home1.png','Seal King')+image('imgi_9_home2.png','Techniseal')+'</div></section>'+quote();}
function servicePage(){return h('What we do.','Complete outdoor restoration, installation, paving and maintenance solutions.')+'<section class="wrap light"><span class="eyebrow dark">OUR EXPERTISE</span><h2>Explore the services.</h2><div class="service-list">'+serviceList()+'</div><div class="faq"><h3>How much?</h3><p>A estimate can be arranged at no cost to you. Every property is a different size, and is in a different condition than the next.</p><p>This is why we use a price based on time and material and in some cases sqft price.</p><p>To request a quote please feel free to contact us!</p></div></section>'+quote();}
const potholeRepairDetails = `
<p>Give us a call now at (416) 525-7077 for more information on our pothole repair services or to schedule a consultation today.</p>
<p><a class="rounded-link" href="/contact-us/">Request a free quote</a></p>
<h2>Imperial Sealing’s Pothole Repair and Diagnosis</h2>
<p>It’s important to regularly carry out inspections for pavement rehabilitation and maintenance. In a case where a pothole has already formed, the repair should be done as soon as possible.</p>
<p>Once a pothole forms, the area around the pothole becomes weakened due to the dispersion of water below the surface, which compromises the region and can lead to collapse causing additional pothole formation around the original one. An early repair will make for an easy, less expensive repair.</p>
<h2>Damage Assessment with our Asphalt Repair Team</h2>
<p>Our paving contractors assess the damage to your pavement by the conventional manual visual inspection. It is carried out to outline the severity of the asphalt pothole or crack and to determine the type of repair to be made. Here are some ways in which we assess an asphalt driveway with a crack or pothole:</p>
<ul>
  <li>Remove any debris or water in the hole.</li>
  <li>Determine the depth and diameter of the pothole.</li>
  <li>Assess the extent of the damage.</li>
</ul>
<h2>Executing Effective Asphalt Repair</h2>
<p>We use a spray or a compressed air gun to remove any debris that would obstruct filling every ounce of space in the pothole. This is imperative so that we can remove any asphalt pieces protruding to create an avenue for easy and proper filling. Sometimes this means expanding the hole before treating it. Our modern equipment allows us to do this efficiently and effectively without causing unnecessary damage.</p>
<p>Our job depends on the depth of the pothole. If the pothole is less than half an inch deep, one of our specially formulated asphalt emulsion fillers can be used to fill the hole quickly. If the hole is larger, we’ll fill it with crushed gravel, sand, or clay mixed with crushed gravel because of its binding and abrasive capacities.</p>
<p>After filling the pothole with crushed gravel and clay we then compress and compact each pothole with asphalt making sure it will be level. After the asphalt patch has cured, we then apply one of our top-rated asphalt sealants to prevent air from getting to the patch allowing it to harden properly.</p>
<h2>Quality Pothole Repairs Guaranteed</h2>
<p>We guarantee that our work will exceed your expectations. Our quick and thorough repairs can last between 7-10 years and can be extended to 20 years if used alongside our regular paving maintenance services. To learn more about our maintenance plans, get in touch with us today.</p>
<h2>Schedule Your Pothole Repair with Us Now</h2>
<p>Give us a call now. You’ll be glad that you chose our expert team for your pothole repairs and paving solutions.</p>
<p>If you have any questions about our pothole repairs, get in touch with us, and we’ll be happy to explain our process better to you.</p>
<p>Call us now for more information or to schedule your no-obligation assessment.</p>
`;
const parkingLotPavingDetails = `
<p>Get in touch with the paving experts now to learn more!</p>
<p><a class="rounded-link" href="/contact-us/">Request a free quote</a></p>
<h2>Imperial Sealing’s Top-Tier Parking Lot Paving</h2>
<p>Paving your parking lot requires a tried and trusted team of parking lot paving contractors to ensure your needs are effectively met at a competitive rate. That’s why we offer an assessment and consultation to each of our clients. The initial assessment process allows us to tailor our paving solutions to your precise needs and budget. This will allow us to avoid unnecessary expenses that increase project costs and prolong timelines.</p>
<p>On-site, detailed, and using the right techniques, our specialists will cover every ground during an initial inspection such as:</p>
<ul>
  <li>The nature of the substrate</li>
  <li>Topography type</li>
  <li>Water drainage</li>
  <li>Type of asphalt and materials</li>
</ul>
<h2>Our Parking Lot Paving Services</h2>
<p>We work closely with you to deliver personalized parking lot paving solutions. While we develop a custom plan for you, here are the general steps we follow when we carry out our paving services:</p>
<ul>
  <li>Demolishing and clearing your site of the existing surface such as asphalt, paver, concrete or vegetation.</li>
  <li>Grading of the surface to allow for proper water run-off.</li>
  <li>Preparing the sub-base to provide durable support for the pavement.</li>
  <li>Proofing the sub-base to correct soft spots by digging and replacing or consolidating the underlying soil with aggregate materials that provide better support.</li>
  <li>Adding the binder layer on the sub-base. Consider the binder layer as the spine of the new surface that will be laid upon it, so we ensure we don’t cut corners when executing this step.</li>
  <li>Installing the new surface for a smooth and stunning finish.</li>
  <li>Smoothing transition areas to allow for a seamless finish, appropriate water run-off, and great user experience.</li>
  <li>Compacting the surface using a roller to make your parking lot pavement smooth.</li>
</ul>
<p>Whether we need to use one or all of these steps, you can count on us to get the job done right.</p>
<h2>High-Quality Parking Lot Paving You Can Rely On</h2>
<p>We’re a parking lot paving company that stands behind our work 100% and are committed to achieving excellence in every task. We set out to achieve this using our experience, best-in-class industry expertise, and technologies.</p>
<p>We are trusted for:</p>
<ul>
  <li>Using genuine, industry-grade materials, including asphalt, gravels, sealants, etc.</li>
  <li>Designing effective water drainage to prevent damages caused by standing water.</li>
  <li>Giving special attention to the sub-base so that it will be able to support the weight of traffic.</li>
  <li>Providing professionals that employ the best techniques, technologies, and approaches as stipulated to meet and exceed construction and safety standards.</li>
</ul>
<h2>Contact Us Now for Top Parking Lot Paving Services</h2>
<p>Imperial Sealing delivers quality project completion on-time and on-budget marked by excellent customer support, industry best practices, and fairly priced parking lot paving solutions. Our friendly experts are standing by. Get in touch now to discuss your project today.</p>
<p>Call now to schedule your no-obligation consultation (416) 525-7077.</p>
`;
const asphaltRepairDetails = `
<p>Contact us now at (416) 525-7077 to get started on your asphalt repair project today.</p>
<p><a class="rounded-link" href="/contact-us/">Request a free quote</a></p>
<h2>Imperial Sealing: Professional Asphalt Contractors</h2>
<p>Whether your asphalt has cracks, potholes, or other defects, the team at Imperial Sealing has the knowledge and skills to restore your asphalt to its safe and functional former state. With a number of years in the industry, we have acquired proven methods for fast, long-lasting asphalt repairs. We also offer regular asphalt maintenance, which means that you’ll be in good hands even after our repair job is done. For quality workmanship and excellent customer service, get in touch with one of our contractors today.</p>
<h2>Asphalt Patch and Pothole Repair Assessment</h2>
<p>Our first step when you hire us for asphalt repair services is to evaluate the extent of work that needs to be done. This starts with assessing the state of your current asphalt. For this, we look at several factors such as the age of the asphalt, the number of cracks and potholes, as well as its daily use. Our paving contractors then break down the work needed to restore your asphalt. This will include an estimate so you’ll be able to better budget for our work. Once all of our planning is complete, we are quick to get started on the repairs.</p>
<h2>Our Asphalt Repair Services</h2>
<p>We’ll have all of the equipment and materials readily available to start the work on your asphalt. Our hard workers arrive prepared for the task, and we pride ourselves in working a hard day of labor respectfully, efficiently, and with as little mess as possible.</p>
<h2>Our asphalt repair process involves:</h2>
<ol>
  <li>Removing all debris and cracked asphalt</li>
  <li>Prepping the area</li>
  <li>Carefully administering a filler for small cracks and holes</li>
  <li>Filling, compacting, and repaving over larger holes</li>
  <li>Sealing and protecting</li>
</ol>
<p>With our team on-site, we will get the job done right, on time and on budget.</p>
<h2>Quality and Satisfaction Guaranteed on All Asphalt Repairs</h2>
<p>Our promise to you is straightforward. We provide high-quality value on all asphalt repair projects we step foot on. We promise that when we finish the job, you’ll be blown away by the level of professionalism that has been delivered by our team. You’ll be able to see and feel the quality and craftsmanship put into filling every crevasse, hole, or crack. We guarantee that you’ll be satisfied with the durability and long-lasting results of our work.</p>
<h2>Call for Premier Asphalt Repairs Today</h2>
<p>Give us a call now to book an appointment for your no-obligation asphalt repair assessment. We promise that you’ll be captivated by our professionalism, expertise, and competitive rates.</p>
<p>Learn more about how you can qualify for day-of repairs by calling us now or getting in touch with us through our online form. We can’t wait to get started on your project!</p>
<p>Contact us now at (416) 525-7077 to get started!</p>
`;
const concreteRepairDetails = `
<p>Contact us now at (416) 525-7077, and we will be glad to provide you with an estimate for your repairs.</p>
<p><a class="rounded-link" href="/contact-us/">Request a free quote</a></p>
<h2>Concrete Repair Is a Clean and Efficient Process</h2>
<p>Many benefits come along with repairing your concrete as opposed to replacing it entirely. Concrete crack repair requires no excavation and has a minimal amount of disruption to home and business owners. It is a clean and efficient process that can be done quickly.</p>
<p>At Imperial Sealing, we offer competitive prices, the highest-quality concrete repairs, and efficient and expert contractors. There is no job too big or small for us to handle. Call us for an affordable, reliable alternative to concrete repair solutions.</p>
<h2>Professional Concrete Repair Contractors</h2>
<p>As a leading concrete repair company, we pride ourselves on providing quality and professional work. We believe in transparency. When we perform the initial assessment process, we ensure our customers understand the work we do, every step of the way. Our contractors make it their responsibility to ensure a safe and functional property for all our customers.</p>
<p>We provide cost-effective solutions to your repair issues to help keep your concrete in pristine condition for years to come.</p>
<h2>Residential Concrete Surface Repair</h2>
<p>A crack in your wall or flooring is a true sign that the ground around your home has shifted. As strong and durable as concrete is, it is not entirely resistant to cracks. Over time, a weak soil base and erosion will cause shifting, sinking, and unevenness.</p>
<p>The first sign of a crack is a warning sign. It is important to address the issue before a more severe problem persists. By repairing surface cracks, you can ensure that they will not widen, therefore stopping it in its tracks. Our repair methods include:</p>
<ul>
  <li>Vinyl concrete patching</li>
  <li>Elastomeric fillers</li>
  <li>Polyurethane sealers</li>
  <li>Concrete resurfacing</li>
  <li>Epoxy crack injection repairs</li>
</ul>
<h2>Structural Commercial Concrete Repairs</h2>
<p>Cracks in your concrete, especially in the foundation, can be the result of thermal shifting, design deficiencies, or improperly poured concrete. We have several methods for concrete crack repair and can restore integrity and stability to your building. Our methods include:</p>
<ul>
  <li>Soil stabilization</li>
  <li>Leak stoppage</li>
  <li>Overlays and toppings</li>
  <li>Injection methods</li>
  <li>Coatings and linings</li>
  <li>Shot blasting</li>
  <li>Traffic coatings</li>
</ul>
<h2>Contact Us for Concrete Repairs</h2>
<p>When you notice cracks in your ceiling, flooring, or walls, it is crucial to take care of the issue immediately. When your concrete breaks, it is most likely due to the shifting of the soil surrounding your area. The safest way to deal with this is to repair the crack before it has a chance to widen. Put an end to sunken concrete, uneven surfaces, and cracked driveways and patios.</p>
<p>Contact us now at (416) 525-7077 to get started!</p>
`;
const concreteRemovalDetails = `
<p>Our highly trained staff is experienced in completing concrete demolition, waste removal, and site cleanup. Contact us at (416) 525-7077 and obtain a detailed quote tailored to your specific concrete removal needs.</p>
<p><a class="rounded-link" href="/contact-us/">Request a free quote</a></p>
<h2>All-Inclusive Concrete Services</h2>
<h3>Demolition, Removal, and Site Cleanup</h3>
<p>Concrete removal is a labor-intensive process that is best left to the professionals. We will first conduct a site inspection to estimate the concrete cutting and removal time. We will also assess which equipment and tools we need to complete the project. Based on our detailed consultation, we will be able to accurately determine a price estimate for your project, which will include waste disposal and site cleanup costs.</p>
<h2>Certified Concrete Cutting Contractors</h2>
<p>The concrete removal process requires specific expertise, attention to detail, and advanced techniques and tools. To ensure the job is done right, leave it to our concrete cutting professionals.</p>
<p>Our friendly and certified staff will complete all the necessary phases of the removal process to guarantee superior results. From demolition to site cleanup, we guarantee the job will be done on time and within budget. You will be left with a clean site and ready to move forward with your next project. We are fully insured and bonded for your protection.</p>
<h2>Fast and Effective Concrete Demolition</h2>
<p>Our staff will begin the process by measuring the area of the concrete slabs that need to be removed. This will help determine the type of equipment and removal methods that are best suited for your specific needs. We know your time is valuable. That is why we choose demolition methods that are both fast and effective.</p>
<h2>Concrete and Waste Removal</h2>
<p>Once the concrete has been removed, our technicians will make sure to remove all the debris from the site. Depending on the size of the site and the amount and type of debris, we will choose the appropriate removal method that is the most efficient and takes the least amount of time.</p>
<h3>Environmentally Friendly</h3>
<p>Our removal methods are environmentally friendly, and we make sure to recycle the concrete waste. Our services include collecting and transporting the debris from the site to the dumping area. The removal process is critical for ensuring the site is ready for the following cleanup phase.</p>
<h3>Site Cleanup</h3>
<p>Now that your concrete has been removed, we won’t leave your property messy with debris and dust. Cleaning up after the demolition is a process that involves special equipment and skills. We offer post-removal cleaning services from top to bottom so that your property site is ready for the next project.</p>
<h2>Concrete Removal: Construction Projects Made Easy</h2>
<p>Contact us now to book an appointment, obtain an estimate, or for more information on our concrete removal services.</p>
`;
const concreteWalkwaysDetails = `
<p>At Imperial Sealing, we offer a reliable and skilled service that will leave you satisfied with your choice to invest in a concrete walkway. Get in touch with us now at (416) 525-7077 and let us plan your next property improvement project.</p>
<p><a class="rounded-link" href="/contact-us/">Request a free quote</a></p>
<h2>High-Quality Concrete Walkways by Imperial Sealing</h2>
<p>Walkways are much more than just a path to your property’s entrance. The evolution of decorative concrete has pushed the boundaries of what can be done with such material: the artistic design possibilities have become more and more popular. Whether the statement you are trying to make is bold or subtle, your walkway is undoubtedly the first and last thing that visitors and passersby will notice.</p>
<p>Every concrete project you have begins with a vision. We understand the time and effort that is behind every investment put toward making your home or business as beautiful as you’ve dreamed. We are committed to completing your concrete walkway project on time and within budget without compromising the quality of our work.</p>
<h2>Concrete Walkway Installation Services</h2>
<p>We believe that having a well-designed walkway can add curb appeal to the front of your home or business: it will blend in nicely with the surrounding landscape. When you hire us, you can sit back and relax, knowing that we will take care of the installation process every step of the way.</p>
<p>You can count on us for:</p>
<ul>
  <li>Fair and honest estimation based on your budget</li>
  <li>Project management and design</li>
  <li>Foundation preparation and digging</li>
  <li>Solutions that are scalable to your individual needs</li>
  <li>Modern tools and equipment to get the job done right</li>
</ul>
<h2>Concrete Walkway Repair Services</h2>
<p>A damaged or cracked walkway is not only unsightly, but it also poses a safety issue to those walking on it. There are many reasons why your walkway may become uneven, most of which are unavoidable due to unexpected shifts in the foundation beneath it. Luckily, cement walkway repairs are a great way to give your pathways a facelift, leaving them looking brand-new. Our concrete repair solutions are not intrusive and can usually be completed within the same day so as not to disrupt your routine. You can always count on us for reliable repair service.</p>
<p>Contact us now.</p>
<h2>Resurfacing Concrete Walkways</h2>
<p>Over time, your concrete surfaces may become worn and dull due to sunlight and weather conditions. Instead of tearing out the existing stairs and replacing them, most people decide to have their walkways resurfaced. It’s a great way to restore your walkway and develop that design idea you’ve always had in mind.</p>
<h2>Professional Concrete Walkway Services</h2>
<p>We pride ourselves on the fact that every job we do is done to the best of our ability. We use the latest technology and methods to ensure that we complete each job correctly and to the highest standards of quality. Our highly trained crew is ready to take on your next cement walkway project.</p>
<p>Contact us now to get started.</p>
`;
const decorativeConcreteDetails = `
<p>Imperial Sealing combines the beauty of traditional masonry with the affordability and strength of concrete. We use advanced techniques and products to give your flooring or patio a well-deserved facelift.</p>
<p>Contact us now at (416) 525-7077 to get started on your decorative concrete project.</p>
<p><a class="rounded-link" href="/contact-us/">Request a free quote</a></p>
<h2>Concrete Coatings for Durable Floors</h2>
<p>The advantages of coating your concrete floors will not only enhance the appearance but will also add durability and years of straightforward maintenance. Decorative concrete coatings provide an ideal way to make flooring functional for your daily operations. With added resistance to spills, you can be sure to make your everyday tasks much easier to manipulate.</p>
<h2>Traditional Decorative Concrete Methods</h2>
<h3>Polished Concrete</h3>
<p>Our customers appreciate polished concrete because it is more cost-effective than using wood or tile materials. By using concrete to finish flooring, the results are undeniably aesthetically appealing. Typically used for commercial settings, even homeowners are beginning to see the appeal of bright and shiny concrete due to its many benefits.</p>
<h3>Stamped Concrete</h3>
<p>Commonly used for patios, walkways, and pool decks, stamped concrete is a revolutionary method that will give the appearance of stone or brick without the price attached to using authentic materials. Stamped concrete creates patterns and textures that add depth and an excellent feel to any outdoor space: it is sure to add elegance and style to your property.</p>
<h2>Our Effective Concrete Solutions for Any Property</h2>
<h3>Concrete Resurfacing</h3>
<p>Just as with most materials, concrete can get worn and damaged over time. The good news is that Imperial Sealing offers an alternative to replacing your old concrete––concrete resurfacing. This technique is an effective way to renew your old concrete surfaces without the headaches and costs of replacing them. At this point, it is a great opportunity to redecorate your concrete in a color or pattern of your choosing to freshen up your property.</p>
<h3>Concrete Stain</h3>
<p>When you decide to give your flooring a new look, concrete staining is a great solution for added depth and appeal to your existing concrete flooring. These methods can be applied to indoor and outdoor surfaces. Get the lavish look you’ve always wanted with marble, stone, and other elegant finishes at a fraction of the cost.</p>
<h2>Consistent Results by Our Professional Concrete Company</h2>
<p>When you choose us, you are hiring a company that strives for perfection. We are proud to be one of the most reputable concrete companies in our area due to the work ethic and consistent results we provide to our customers.</p>
<p>We are happy to help you transform your property by implementing the most modern and trendy concrete staining techniques.</p>
<p>Contact us now to find out more about the concrete decorating services we have to offer.</p>
`;
const stuccoRepairDetails = `
<p>Contact Imperial Sealing now! Dial (416) 525-7077 to be connected to the brilliant team that has everything it takes to handle all areas of stucco repair.</p>
<p><a class="rounded-link" href="/contact-us/">Request a free quote</a></p>
<h2>Imperial Sealing Stucco Crack Repair</h2>
<p>As a proudly local team of stucco contractors, we stand behind all our work. We always give it a hundred percent to ensure our stucco patch and crack repair is top-tier, so that we can look back on our work with pride, knowing we’ve served our neighbors well. You can count on us for prompt, efficient work, high-quality materials, friendly workers, and long-lasting results.</p>
<h2>Residential Stucco Repair</h2>
<p>Whether you live in a:</p>
<ul>
  <li>Farmhouse</li>
  <li>Townhouse</li>
  <li>Detatched home</li>
  <li>Duplex</li>
  <li>Minihome</li>
  <li>Or any other type of residency</li>
</ul>
<p>Your home deserves the best. And whether your home stucco has been suffering from cracks, holes, weather damage, or water damage, we can make sure it’s as good as new. As experts, we know just how to handle all manners of residential stucco crack repair and more. We’ll use our high-quality tools and equipment to resolve the problem and get your stucco walls back to normal. The result will be something you can count on for a long time.</p>
<h2>Commercial Stucco Repair</h2>
<p>We’ve been in the stucco repair business for quite some time now, and we’re proud to say there’s nothing we can’t do. We’ve worked on a wide variety of properties, and we know how to repair stucco in just about any kind of building, including:</p>
<ul>
  <li>Offices</li>
  <li>Industrial</li>
  <li>Multifamily</li>
  <li>Retail</li>
  <li>And more</li>
</ul>
<p>No matter what type of property you have, or what your stucco repair needs may be, we’ll make sure your needs are met correctly. We’ll work with you to come up with a solution that suits your budget, schedule, and all needs.</p>
<h2>Affordable Stucco Patch Services</h2>
<p>These days, it’s more important than ever to save money when possible and be budget-conscious. As a small business, we understand that better than anyone. That’s why we always strive to keep our prices fair and reasonable, so all our great clients can enjoy top-notch services.</p>
<p>We don’t believe in upselling or unnecessary add-ons—just fair and honest prices for world-class work. We’re happy to offer combined services, and we can even provide free quotes and estimates. Call us now at the number provided to hear more.</p>
<h2>Get the Best Local Stucco Contractors Now</h2>
<p>Now that you know what we can do for you, it’s time to take the next step and contact us. Reach out at the number provided to speak to a customer service agent. They’ll be more than happy to answer all your questions, help you choose the services that are right for you, and give you all the info you need to make an informed choice about your property’s stucco needs.</p>
<p>Once you experience our work, you’ll understand why we stand out from all other stucco repair companies. Call now!</p>
`;
const interlockingPaversDetails = `
<p>Reclaim residential, commercial, and industrial outdoor spaces by partnering with our talented team of licensed industry experts. Call (416) 525-7077 to learn more about how we’ll tailor our services to your next hardscaping installation or maintenance project.</p>
<h2>Paving Stone Installation</h2>
<p>Choosing us for your paving stone installation ensures unparalleled quality and timeless results. Our seasoned team has extensive expertise in ensuring each project is executed meticulously, from the initial design to the final stone placement.</p>
<p>Here’s how we can help:</p>
<ul>
  <li>Paver driveway installations</li>
  <li>Stone pathway and walkway installations</li>
  <li>Stone patio installations</li>
  <li>Paver BBQ enclosure construction</li>
  <li>Stone accent installations</li>
  <li>Stone pillar installations</li>
  <li>Flagstone installations</li>
  <li>Natural stone installations</li>
  <li>…and more!</li>
</ul>
<p>We prioritize using superior materials, guaranteeing durability and aesthetic appeal that stands the test of time. Your vision is our mission, and we're committed to transforming your outdoor spaces with impeccable craftsmanship, creating a stunning, enduring landscape that enhances your property’s value and charm.</p>
<h2>Paving Stone Releveling</h2>
<p>Our proven paving stone releveling process ensures precision and aesthetic continuity for your paved surfaces. Our skilled technicians begin by assessing the initial condition of the stone surface to identify and address the root causes of misalignment or sinking.</p>
<p>Leveraging specialized tools and techniques, we carefully lift the affected stones, re-preparing the base with optimal leveling, compaction, and grading. Stones are then meticulously reinstalled, ensuring an impeccably level, stable, and aesthetically pleasing surface that preserves the integrity and longevity of your paved area.</p>
<h2>Interlocking Concrete Sealing</h2>
<p>Trust our expert team for your interlocking concrete sealing solutions—where quality meets affordability. With years of specialized experience, we masterfully safeguard your pavers against wear, stain, and weather damage, prolonging their beauty and durability.</p>
<p>We prioritize transparent pricing, ensuring solutions are tailored to your budget without compromising the impeccable finish and protection your interlocking concrete surfaces require.</p>
<h3>Concrete Coloring Options</h3>
<p>Explore a world of vibrant and subtle hues with our concrete coloring options, designed to elevate the aesthetics of your space. Our sealing services safeguard your chosen concrete color, ensuring longevity and resistance against wear and weathering.</p>
<h2>Snow Removal and Salting Services to Keep Your Property Safe This Winter</h2>
<p>In addition to our paver installation and maintenance options, we’re proud to offer a wide range of snow removal and salting services. Whether you have a single driveway or a large parking lot to keep clear of snow and ice, we’re the professionals you can count on for timely and consistent snow-clearing service.</p>
<h2>Call Imperial Sealing to Explore Hardscape Installation and Maintenance Services</h2>
<p>Imperial Sealing is proud to be our residential and business community’s first choice for a full suite of hardscape installation and maintenance services. From installing patios, driveways, and other paver and natural stone surfaces to providing industry-leading paver and concrete sealing services to taking care of residential and commercial snow removal, our experts are fully licensed and insured to do it all.</p>
<p>Call (416) 525-7077 to learn more about what makes us the right choice for your next property improvement project.</p>
`;
const asphaltMaintenanceDetails = `
<p>Imperial Sealing consists of dedicated professionals that can accommodate your particular and exclusive needs for any project. Our professionalism allows us to provide the required repairs with minimal disruption to traffic flow.</p>
<p>For more information on our asphalt maintenance services, call us now at (416) 525-7077.</p>
<p><a class="rounded-link" href="/contact-us/">Request a free quote</a></p>
<h2>Imperial Sealing: Experienced Asphalt Contractors</h2>
<p>Our years of experience has allowed us to perfect our craft and provide the highest level of customer service to our clients. Our focus is on you, our customer, and ensuring your satisfaction with quality work and regular attention. We additionally offer no-obligation consultations for our services, so there’s no reason to delay your asphalt project for your household or business. We guarantee that you’ll be glad you chose us for the job.</p>
<h2>Our Asphalt Maintenance Assessment</h2>
<p>Asphalt is widely used because of its longevity and flexibility for several projects. The patching process is necessary when asphalt pavement has deteriorated in a particular area. As stress cracking or potholes develop, a surface area patch may be a quick and inexpensive repair. However, for more extensive damage, it may make more sense to resurface your pavement completely.</p>
<p>Our exceptional foresight will allow us to give you the best idea as to what your asphalt needs now and what it will need in a few years. We’ll help you make the right choice based on the needs of your pavement and your budget during our assessment.</p>
<h2>Professional Asphalt Services</h2>
<p>Our asphalt routine maintenance solutions use the right equipment and high-quality materials to make sure that you’re getting top-of-the-line work. When we start our maintenance process we declutter and clean the asphalt. We then inspect every inch of the lot and indicate the extent of work that will need to be done on each spot. Following this, we use our special formulas to fill in and cover up every dent and crack on the entire lot, giving it a smooth and level appearance.</p>
<p>We promise that our frequent asphalt maintenance services will prolong the life of your asphalt. Give us a call now, and you’ll see immediate results within the first session.</p>
<h2>Our Asphalt Contractors Provide Quality Work Every Time</h2>
<p>As one of the leading paving contractors, our exclusive approach to every maintenance project is second to none. If you need asphalt paving or paving maintenance done, we go considerably above and beyond to ensure your project is done to the highest possible standards. In addition to the quality of our products, we execute every task with the utmost level of professionalism. When you use our asphalt maintenance services, you can be confident that your asphalt will look better and last longer.</p>
<h2>Superior Asphalt Maintenance You Can Rely On</h2>
<p>For all of your asphalt repair and maintenance services, call Imperial Sealing. We’ll be happy to come to evaluate your pavement and get started on repairs right away.</p>
<p>Contact us now at (416) 525-7077 to get started!</p>
`;
const concreteDrivewaysDetails = `
<p>Call us now at (416) 525-7077 and book your consultation today.</p>
<p><a class="rounded-link" href="/contact-us/">Request a free quote</a></p>
<h2>Plan Your Concrete Driveway Installation</h2>
<h3>In-depth Consultations and Design</h3>
<p>Once you have chosen a design that you are happy with, you can trust our certified team to take it from there. Our installation methodology follows all safety procedures and is unique to every project we complete.</p>
<p>Once our staff has planned your driveway’s size, shape, and route, they will begin cleaning and preparing the selected area. We will then lay out the shape of your driveway and decide on the appropriate forms and reinforcement materials. Once the base is installed, our driveway contractors will pour a unique concrete mix, add texture, and allow it to cure.</p>
<h2>Our Driveway Repair Experts Can Fix Your Concrete</h2>
<p>Our concrete driveway repair solutions are durable and specially designed to repair all types of concrete defects that appear on your driveway. We have experience fixing leaking cracks, holes, and other defects that affect the functionality of your driveway and present a safety hazard. Our employees are trained to use advanced techniques to lift, level, seal, and protect your concrete for years to come.</p>
<h2>Transform Your Commercial Concrete with Resurfacing</h2>
<p>As the years go by, driveways can become damaged for various reasons and can cause a risk to the safety of you and your guests. Concrete driveway resurfacing is a great option to give your concrete driveway a facelift without breaking the bank. Our professionals have been helping business owners make their concrete surfaces look like new. Our highly effective sealers will cover any existing imperfections and give a beautiful finish to your concrete driveway.</p>
<h2>Choose a Unique Design for Your Home’s Driveway</h2>
<p>There are many benefits to choosing concrete for your new driveway. Not only is concrete a very sturdy and long-lasting material, but it can be molded to achieve almost any design and look. We strive to give our clients a concrete driveway that will be not only a safe and clean place to park but also a stunning addition to their home.</p>
<p>During your time with us, our professional concrete driveway contractors will take the time to understand your specific requirements, advise on design, color, scheme, and explain our unique approach. You can trust our certified driveway contractors to finish your project on time and within budget.</p>
<h2>Imperial Sealing: Driveway Contractors You Can Trust</h2>
<h3>Contact Us</h3>
<p>At Imperial Sealing, we proudly offer the highest quality concrete mix, equipment, and workmanship to all our residential and commercial clients. We are committed to delivering excellent results in every concrete job that we manage, no matter the size or complexity.</p>
<p>Contact us now for a personalized estimate, and start planning the driveway of your dreams.</p>
`;
const concreteStairsDetails = `
<p>Imperial Sealing is the leading provider of poured concrete stairs and precast concrete steps. Our reputation for high-quality installation and repair services has been our pride and joy. When you trust us with the construction of your home or property, you can rest assured that you’ve chosen to work with professionals.</p>
<p>Contact us now at (416) 525-7077 to book a consultation and to obtain expert advice.</p>
<p><a class="rounded-link" href="/contact-us/">Request a free quote</a></p>
<h2>Concrete Step Repairs by Imperial Sealing</h2>
<p>Transform your broken, uneven stairs into safe and stable steps that can be walked on as soon as our repairs are finished. Concrete step repair is a cost-effective alternative to tearing out the concrete and starting from scratch.</p>
<p>Most of our repair services can be completed in a day with minimal damage to your hardscape or surrounding landscape. We can get the job done in a hassle-free manner so that you can have your steps functional as soon as possible.</p>
<h2>Fast and Easy Concrete Stair Installation</h2>
<h3>Precast Concrete</h3>
<p>Precast concrete steps are fabricated and then delivered straight to your door, ready to be installed. Imperial Sealing manufactures high-strength and steel-enforced concrete in many shapes and sizes. The advantages that come with using precast concrete steps are that they are speedy and easy to install, making them a great option when considering your choices.</p>
<h3>Poured Concrete</h3>
<p>Another method used by our contractors is pouring concrete steps. Pouring cement steps in place will give you an extremely sturdy surface with the necessary strength to incorporate handrails. This method allows for modifications to be made on-site if necessary, as concrete is a very versatile material. It is essential to keep in mind that you won’t be able to walk on your stairs for several days once construction begins.</p>
<h2>Affordable Concrete Resurfacing</h2>
<p>Normally, your concrete steps will need to be resurfaced throughout the years, especially if they are prone to high traffic. Deteriorating steps can be an eyesore as well as a safety hazard to those using them daily. Instead of viewing this as a setback, it can be seen as an opportunity to give your stairs a brand-new look while increasing the security of your home or property.</p>
<p>Whether you are looking to improve your property or are getting ready to sell it in a competitive market, resurfacing your stairs will add excellent curb appeal to the front of your building. By resurfacing your steps, you can be sure that they will last much longer without the cost attached to replacing them.</p>
<h2>Get the Concrete Stairs You Need</h2>
<h3>Call Us Now</h3>
<p>As an experienced concrete stair contractor, we value our customers. We are always willing to work with them to make sure they are satisfied throughout the entire process of installing, repairing, or resurfacing their stairs.</p>
<p>Book an appointment with one of our specialists now to start planning your concrete stair project.</p>
`;
const garageConcreteDetails = `
<p>Our concrete floor coating solutions are extremely resilient and resistant to harmful contaminants such as salt, oil, and chemicals. Our high-quality concrete mix will turn your garage floor into a smooth and waterproof surface.</p>
<p>Call us now at (416) 525-7077 to book a consultation or to start planning your new concrete garage floor.</p>
<p><a class="rounded-link" href="/contact-us/">Request a free quote</a></p>
<h2>Reputable Garage Concrete Floors</h2>
<p>Concrete floors are growing in popularity because of their many advantages. They are simply the most durable floors you can get. No other type of flooring or material is as resistant to wear and tear as are concrete floors. Our epoxy floor coverings provide a tough and protective layer that is resilient to all types of chemicals and contaminants.</p>
<h2>Choose a Custom Concrete Garage Floor</h2>
<p>Concrete floors can be customized to fit within the natural style of your property. Our staff can help you choose from a wide array of styles, colors, textures, and decorative finishes such as flakes, quartz, and much more. Thanks to our specially formulated and long-lasting epoxy coatings, your floors will be easy to maintain and clean of all dirt, dust, oil, and grease.</p>
<p>Our concrete products and finishes are very safe to use since they are non-slippery and impervious to water, heat, and fire.</p>
<h2>Trusted Company for Concrete Garage Floors</h2>
<p>Our epoxy flooring solutions and concrete floor coatings are durable, beautiful, and customizable. Our specialists can help you choose from a wide range of color coatings to suit the style of your property. Our company works closely with you from the preparation of the sealing. Our concrete solutions include:</p>
<h3>Surface Preparation</h3>
<p>Our concrete experts will first assess the quality of your current concrete surfaces. Beginning with repairs to any damaged areas, we will also fix any existing imperfections or cracks. Once we have an even surface with no irregularities, our concreters will thoroughly clean your floors to get them ready for concrete pouring.</p>
<h3>Mixing and Pouring</h3>
<p>Before pouring the concrete, our specialists will prepare a concrete mix that is both strong and flexible. Our mix can easily be molded into the design you are looking for. If your property is located in a cold region, we will include special agents in the concrete mix to prevent freezing temperatures from damaging the slabs.</p>
<h3>Sealing Process</h3>
<p>We highly recommend applying high-quality concrete garage floor sealers to extend the life of your floors. Our penetrative garage floor epoxy coating will form a protective barrier that will last for many years and enhance the appearance of your floors.</p>
<h2>Choose Long-Lasting Garage Concrete Floors</h2>
<h3>Contact Our Contractors Now</h3>
<p>Whether you are just thinking about renovating your concrete garage floor or planning to add a new one to your home, our team is here to assist you. Our certified and insured concrete experts use the most advanced techniques and technologies available to deliver superior results.</p>
<p>Start planning the garage of your dreams by contacting one of our specialists now––(416) 525-7077.</p>
`;
function detail(s){const ix=services.indexOf(s);const file=s[1]==='garage-concrete'?'garage-concrete.png':s[1]==='concrete-leveling'?'concrete-leveling.png':s[1]==='concrete-driveways'?'concrete-driveways.png':s[1]==='asphalt-maintenance'?'asphalt-maintenance.png':s[1]==='parking-lot-repair'?'parking-lot-repair.png':s[1]==='interlocking-pavers'?'interlocking-pavers.png':s[1]==='repairs'?'repairs.png':s[1]==='installations'?'installations.png':s[1]==='stucco-repair'?'stucco-repair.png':s[1]==='decorative-concrete'?'decorative-concrete.png':s[1]==='concrete-walkways'?'concrete-walkways.png':s[1]==='concrete-removal'?'concrete-removal.png':s[1]==='concrete-repair'?'concrete-repair.png':s[1]==='asphalt-repair'?'asphalt-repair.png':s[1]==='parking-lot-paving'?'parking-lot-paving.png':s[1]==='pothole-repair'?'pothole-repair.png':galleryFiles[(ix*3)%galleryFiles.length];return h(s[0]+'.',s[2],'HOME / SERVICES / '+s[0].toUpperCase())+'<section class="wrap light detail-layout"><article class="detail-body"><div class="detail-image">'+image(file,s[0]+' project')+'</div><p>'+s[2]+'</p>'+(s[1]==='garage-concrete'?garageConcreteDetails:s[1]==='concrete-stairs'?concreteStairsDetails:s[1]==='concrete-driveways'?concreteDrivewaysDetails:s[1]==='asphalt-maintenance'?asphaltMaintenanceDetails:s[1]==='interlocking-pavers'?interlockingPaversDetails:s[1]==='installations'?'':s[1]==='stucco-repair'?stuccoRepairDetails:s[1]==='decorative-concrete'?decorativeConcreteDetails:s[1]==='concrete-walkways'?concreteWalkwaysDetails:s[1]==='concrete-removal'?concreteRemovalDetails:s[1]==='concrete-repair'?concreteRepairDetails:s[1]==='asphalt-repair'?asphaltRepairDetails:s[1]==='parking-lot-paving'?parkingLotPavingDetails:s[1]==='pothole-repair'?potholeRepairDetails:s[1]==='parking-lot-repair'?"<p>We are a parking lot repair company that can provide crack repair, saw-cuts, patching, complete dig-outs, replacement, and more. Contact us now at (416) 525-7077 for more information on our parking lot repair services.</p><p><a class=\"rounded-link\" href=\"/contact-us/\">Request a free quote</a></p><h2>Imperial Sealing is Your Reliable Parking Lot Repair Company</h2><p>Whether for commercial or residential complexes, your parking lot needs to be well looked after to withstand exposure to the elements and volume of traffic. Our larger repairs all start as tiny cracks or potholes, which were left unattended. These problems only became worse as they grow in size leading to costly repairs.</p><p>As soon as you notice issues with your pavement, don’t put it off—get it fixed. And as your reliable paving company, we’ll be ready to get started as soon as possible. If you’ve waited a while and your parking lot appears to have serious damage already, don’t wait any longer. We’ll be able to repair damage and prevent further deterioration.</p><h2>Our Parking Lot Repair Services</h2><h3>Repair Appraisal</h3><p>Because providing tailor-made paving repairs is at the heart of what we do, an initial on-site inspection to get a thorough understanding of the situation is a must. At this point, our experts will discuss your needs and the most suitable options for you.</p><p>Information gathered at this stage is what will be used to provide you with a no-strings-attached free quote as well as to develop a plan of action.</p><h3>Fulfilling Our Promise</h3><p>Every parking lot repair project comes with its challenges, but our dedication to duty and commitment to excellence remains constant. Our paving contractors will report to the site on-time with the latest tools using our tested approach to ensure your parking lot, whether big or small, is made to look its best again.</p><p>Here is what to expect:</p><ul><li>Our parking lot repair contractors will ensure debris is brushed away.</li><li>We’ll use the highest quality asphalt crack fillers to close up and seal small cracks.</li><li>We use asphalt patches to fix larger holes and make sure it is flush with the remaining surface of the pavement.</li><li>In some cases, our experts will use an asphalt saw to cut out the affected area then complete the repair with fresh aggregate material and asphalt.</li></ul><p>Whether we use one or all of these methods, you can be confident that you’ll have a seamless repair when you choose us for the job.</p><h2>The Parking Lot Contractors Who Guarantee Quality</h2><p>Our parking lot contractors insist on quality repairs every time.</p><p>For your project we’ll use:</p><ul><li>Industry-grade pavement repair materials.</li><li>An experienced team consisting of our highly trained, skilled, and friendly team staff</li><li>Quality repairs that will withstand the harshest of elements and prolonged use.</li><li>The latest technologies and techniques that deliver efficient and truly reliable results.</li></ul><h2>Call for Parking Lot Repairs That Will Stand the Test of Time</h2><p>Our experienced paving contractors are your best option if you want your repairs done right the first time. Contact us now let’s make it happen.</p><p>Call now to schedule your no-obligation consultation (416) 525-7077.</p>":s[1]==='concrete-leveling'?"<p>We strive to offer clean, reliable, and cost-effective concrete leveling services to our valued clients.</p><p>Contact us at (416) 525-7077 to learn more about the various options when it comes to our concrete services.</p><p><a class=\"rounded-link\" href=\"/contact-us/\">Request a free quote</a></p><h2>Expert Residential Concrete Lifting with Imperial Sealing</h2><p>The sinking and un-leveling of concrete slabs are common on all properties. Several factors contribute to sunken concrete, including:</p><ul><li>Age</li><li>Shifting soil base</li><li>Erosion</li><li>Poor installation or building techniques</li></ul><p>We use fast and efficient methods to raise and lift your concrete. Get back to enjoying your driveway, patio, or sidewalk without worry or safety hazards.</p><h2>Concrete Raising</h2><h3>Quickly Stabilize Your Concrete</h3><p>Knowing what caused the damage to your concrete is the first step in assessing which product or method should be used to correct the sinking or settling of your concrete. The two most common applications we use are mud jacking and foam jacking.</p><p>Mud jacking requires pumping a mortar-based mix under the settling slab. Foam jacking involves patching up small holes to be almost invisible to the eye. The latter technique can be useful for colored concrete that you do not wish to resurface.</p><h2>Concrete Repair for Commercial Properties</h2><p>We are always looking for ways to improve our methods by staying up to date with the most recent technologies. Overall, concrete lifting is an excellent alternative to replacing your existing concrete surfaces without breaking the bank. Here are a few of the added benefits:</p><ul><li>Cost-effective option to repair sunken concrete</li><li>Clean and quick to complete</li><li>Controlled lifting</li><li>Non-destructive as your landscape will not be affected</li><li>Equipment is non-intrusive to your property</li></ul><h2>Common Areas for Concrete Foundation Repairs</h2><h3>Basement and Garages</h3><p>The concrete flooring in your basement or garage is typically made up of one solid slab. By leveling the entire floor to create a smooth surface, you eliminate the risk of potential leaks from cracks. In the case of a floor that already has cracks, we will assess each area until it is completely even.</p><h3>Patios and Outdoor Pool Areas</h3><p>Any variation of outdoor concrete slabs can be leveled out to their original state. If your patio is made up of tiled concrete, this will require a more in-depth assessment to ensure each area is leveled and even. Aligning each spot is crucial, and requires unique skills and experience to be executed properly.</p><h3>Driveways</h3><p>Unlike most cement surfaces, driveways are a bit different in that they follow a particular shape and path. When providing this service, we make sure that all areas of your driveway are leveled in connection with the entrance.</p><h2>The Best Concrete Leveling Services</h2><p>Our skilled contractors are available to walk you through the process every step of the way to make sure you are satisfied with the results of your newly leveled concrete surface. Leveling cement is not an easy task, but we are confident that our team can handle any job.</p><p>Get in touch with us now to begin your concrete foundation repairs.</p>":s[1]==='epoxy-coating'?"<p>Some of the benefits would include easy clean up, protection against oil, salt and anything else that might normally damage unprotected concrete. custom designs are also available!!!</p>":'<p>For a free consultation please contact one of our experts today!</p>')+button()+'</article><aside class="detail-side"><h3>Services</h3><p>Explore other ways Imperial Sealing can help.</p><div class="service-nav">'+services.map(x=>'<a href="/services/'+x[1]+'/">'+x[0]+'</a>').join('')+'</div></aside></section>'+quote();}
function gallery(){return h('Work worth seeing.','Real project photos from the original Imperial Sealing gallery.','HOME / GALLERY')+'<section class="wrap light"><span class="eyebrow dark">PROJECT ARCHIVE / 20 IMAGES</span><div class="gallery-grid">'+galleryFiles.map((name,i)=>'<a class="gallery-tile" href="'+ROOT+encodeURIComponent(name)+'" data-gallery-index="'+i+'">'+image(name,'Imperial Sealing project photograph '+(i+1))+'<span>PROJECT / '+String(i+1).padStart(2,'0')+' ↗</span></a>').join('')+'</div></section>'+quote();}
const form=()=>'<div class="wizard" id="wizard"><div class="wizard-top"><span>YOUR PROJECT, YOUR WAY</span><span id="step-count">01 / 04</span></div><div class="progress"><span class="active"></span><span></span><span></span><span></span></div><div id="wizard-content"></div><div class="wizard-actions"><button class="back" id="back-step" type="button" hidden>← BACK</button><button id="next-step" type="button">CONTINUE ↗</button></div><p class="wizard-notice">Preview form only — submissions are not connected yet.</p></div>';
function contact(){return h('Let’s make<br>it happen.','Bring us your idea. We’ll help you figure out what comes next.','HOME / CONTACT')+'<section class="wrap light contact-grid"><div class="contact-info"><span class="eyebrow dark">CONTACT IMPERIAL SEALING</span><h2>Tell us<br>your vision.</h2><p>Imperial Sealing<br>Woodbridge, ON L4H 1E2<br>Canada</p><a href="tel:4165257077">(416) 525-7077</a><a href="tel:9058508232">(905) 850-8232</a><a href="mailto:info@imperialsealing.ca">info@imperialsealing.ca</a><p>Monday - Friday: 8:00AM - 6:00PM<br>Saturday: 8:00AM - 3:00PM<br>Sunday: Closed</p></div>'+form()+'</section>';}
function areas(){return h('Proudly local.','Serving properties throughout North York, Mississauga, Vaughan and surrounding communities.','HOME / SERVICE AREAS')+'<section class="wrap light"><span class="eyebrow dark">WHERE WE WORK</span><h2>Made for your<br>neighbourhood.</h2><div class="service-list">'+['North York','Mississauga','Vaughan'].map(x=>'<a class="service-row" href="/contact-us/"><span>'+x+'</span><b>↗</b></a>').join('')+'</div><h2 style="margin-top:70px">What we do</h2><div class="service-list">'+serviceList()+'</div></section>'+quote();}

function page(path){const match=services.find(s=>path==='/services/'+s[1]);return path==='/'||path==='/home'?home():path==='/services'?servicePage():match?detail(match):path==='/gallery'?gallery():path==='/contact-us'?contact():path==='/services/service-areas'?areas():h('Page not found.','Let’s get you somewhere useful.','404')+'<section class="wrap light">'+button('BACK HOME','/')+'</section>';
}
const shell="<a class=\"skip\" href=\"#main\">Skip to content</a><header class=\"top\"><a class=\"brand\" href=\"/\" aria-label=\"Imperial Sealing home\"><img class=\"logo-img\" src=\"https://imperialsealing.ca/wp-content/uploads/sites/196/2023/06/imgi_7_homelogo.png\" alt=\"Imperial Sealing\"><span>IMPERIAL<small>SEALING</small></span></a><nav class=\"desktop\"><a href=\"/services/\">Services</a><a href=\"/gallery/\">Projects</a><a href=\"/services/service-areas/\">Service Areas</a><a href=\"/contact-us/\">Contact</a></nav><a class=\"nav-cta\" href=\"/contact-us/\">START A PROJECT <b>↗</b></a><button class=\"menu-button\" aria-label=\"Open menu\" aria-expanded=\"false\">MENU <i></i></button></header><div class=\"menu-overlay\" id=\"mobile-menu\" inert><div class=\"mobile-links\"><a href=\"/\">Home <span>01</span></a><a href=\"/services/\">Services <span>02</span></a><a href=\"/gallery/\">Projects <span>03</span></a><a href=\"/services/service-areas/\">Service Areas <span>04</span></a><a href=\"/contact-us/\">Get in Touch <span>05</span></a></div><p>BUILT TO LAST. DESIGNED TO IMPRESS.</p></div>";
const footer="<footer><div class=\"foot-top\"><span>LET'S MAKE<br><em>IT LAST.</em></span><a href=\"/contact-us/\" class=\"circle-arrow\">↗</a></div><div class=\"foot-bottom\"><a href=\"tel:4165257077\">(416) 525-7077</a><a href=\"tel:9058508232\">(905) 850-8232</a><a href=\"mailto:info@imperialsealing.ca\">info@imperialsealing.ca</a><span>© <span id=\"year\"></span> IMPERIAL SEALING</span></div></footer>";
function Wizard(){const [step,S]=useState(0),[v,V]=useState({service:'',place:'',details:'',name:'',email:'',phone:''}),[done,D]=useState(false);const set=(k,x)=>V(old=>({...old,[k]:x}));const options=step===0?['Interlock / Natural Stone','Concrete / Driveways','Asphalt / Parking Lots','Repairs / Restoration','Other / Not sure']:['Vaughan','Mississauga','North York','Other area'];const key=step===0?'service':'place';return <form className="wizard" onSubmit={e=>{e.preventDefault();if(step===3)D(true);else S(step+1)}}><div className="wizard-top"><span>YOUR PROJECT, YOUR WAY</span><span>0{step+1} / 04</span></div><div className="progress">{[0,1,2,3].map(i=><span key={i} className={i<=step?'active':''}/>)}</div>{done?<><h3>Ready for connection.</h3><p>This is a preview. Your details have not been submitted.</p></>:<><h3>{['What can we help you with?','Where is your project?','Tell us about the project.','How can we reach you?'][step]}</h3>{step<2?<div className="choice-grid">{options.map(x=><button key={x} type="button" className={'choice '+(v[key]===x?'selected':'')} onClick={()=>set(key,x)}>{x}</button>)}</div>:step===2?<label className="field">Project details<textarea value={v.details} onChange={e=>set('details',e.target.value)}/></label>:['name','email','phone'].map(k=><label className="field" key={k}>{k==='name'?'Full name':k==='email'?'Email':'Phone'}<input required={k!=='phone'} type={k==='email'?'email':k==='phone'?'tel':'text'} value={v[k]} onChange={e=>set(k,e.target.value)}/></label>)}<div className="wizard-actions">{step>0&&<button type="button" className="back" onClick={()=>S(step-1)}>← BACK</button>}<button disabled={step<2&&!v[key]}>{step===3?'FINISH PREVIEW ✓':'CONTINUE ↗'}</button></div></>}<p className="wizard-notice">Preview form only — submissions are not connected yet.</p></form>}
function Lightbox({index,close,move}){const ref=React.useRef(null);useEffect(()=>{const d=ref.current;d.showModal();const previous=document.body.style.overflow;document.body.style.overflow="hidden";return()=>{document.body.style.overflow=previous}},[]);return <dialog ref={ref} aria-label="Project photo viewer" onCancel={e=>{e.preventDefault();close()}} onKeyDown={e=>{if(e.key==="ArrowLeft"||e.key==="ArrowRight"){e.preventDefault();move(e.key==="ArrowLeft"?-1:1)}}} onClick={e=>{if(e.target===e.currentTarget)close()}} style={{position:"fixed",inset:0,margin:0,width:"100%",height:"100%",maxWidth:"none",maxHeight:"none",border:0,padding:0,background:"rgba(15,14,12,.97)",color:"#fff",overflow:"hidden"}}><div style={{height:"100%",display:"grid",gridTemplateColumns:"clamp(44px,9vw,100px) minmax(0,1fr) clamp(44px,9vw,100px)",alignItems:"center",padding:"0 8px"}}><button type="button" aria-label="Previous image" onClick={()=>move(-1)} style={lightboxButton}>‹</button><figure style={{margin:0,textAlign:"center",minWidth:0}}><img key={index} src={ROOT+encodeURIComponent(galleryFiles[index])} alt={"Imperial Sealing project photograph "+(index+1)} style={{display:"block",width:"100%",height:"auto",maxHeight:"78dvh",objectFit:"contain",margin:"auto"}}/><figcaption style={{padding:"16px",fontSize:13,letterSpacing:2}}>{index+1} / {galleryFiles.length}</figcaption></figure><button type="button" aria-label="Next image" onClick={()=>move(1)} style={lightboxButton}>›</button></div><button autoFocus type="button" aria-label="Close photo viewer" onClick={close} style={{...lightboxButton,position:"absolute",top:16,right:16,fontSize:28}}>×</button></dialog>}
const lightboxButton={background:"transparent",border:"1px solid #d4b66d",color:"#fff",borderRadius:"50%",width:44,height:44,fontSize:32,lineHeight:1,cursor:"pointer",justifySelf:"center",padding:0};
function App(){const [photo,setPhoto]=useState(null);useEffect(()=>{setPhoto(null)},[location.pathname]);const [path,P]=useState(location.pathname.replace(/\/+$/,'')||'/'),[open,O]=useState(false);useEffect(()=>{const pop=()=>P(location.pathname.replace(/\/+$/,'')||'/');window.addEventListener('popstate',pop);return()=>window.removeEventListener('popstate',pop)},[]);useEffect(()=>{document.body.style.overflow=open?'hidden':'';return()=>{document.body.style.overflow=''}},[open]);useEffect(()=>{const match=services.find(s=>path==='/services/'+s[1]);document.title=(match?match[0]+' | ':path==='/'?'':path.split('/').filter(Boolean).pop().replaceAll('-',' ')+' | ')+'Imperial Sealing';document.querySelector('meta[name=description]').content=match?match[2].slice(0,155):'Imperial Sealing: interlock restoration, concrete, asphalt, paving and outdoor surface services in Ontario.';const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}));document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));return()=>obs.disconnect()},[path]);function nav(e){const tile=e.target.closest('[data-gallery-index]');if(tile){e.preventDefault();setPhoto(Number(tile.dataset.galleryIndex));return}const a=e.target.closest('a');if(!a||e.ctrlKey||e.metaKey||e.shiftKey||a.target||!a.getAttribute('href')?.startsWith('/'))return;e.preventDefault();history.pushState({},'',a.href);P(location.pathname.replace(/\/+$/,'')||'/');O(false);window.scrollTo(0,0)}const links=[['Home','/'],['Services','/services/'],['Projects','/gallery/'],['Service Areas','/services/service-areas/'],['Get in Touch','/contact-us/']];return <div onClick={nav}><a className="skip" href="#main">Skip to content</a><header className="top"><a className="brand" href="/"><img className="logo-img" src={ROOT+'imgi_7_homelogo.png'} alt="Imperial Sealing"/><span>IMPERIAL<small>SEALING</small></span></a><nav className="desktop">{links.slice(1).map(([n,u])=><a key={u} href={u}>{n}</a>)}</nav><a className="nav-cta" href="/contact-us/">START A PROJECT <b>↗</b></a><button className="menu-button" aria-expanded={open} onClick={()=>O(!open)}>{open?'CLOSE ✕':<>MENU <i/></>}</button></header><div className={'menu-overlay '+(open?'open':'')} inert={!open}><div className="mobile-links">{links.map(([n,u],i)=><a key={u} href={u}>{n}<span>0{i+1}</span></a>)}</div><p>BUILT TO LAST. DESIGNED TO IMPRESS.</p></div><main id="main" key={path}>{path==='/contact-us'?<><div dangerouslySetInnerHTML={{__html:h('Let’s make<br>it happen.','Bring us your idea. We’ll help you figure out what comes next.','HOME / CONTACT')}}/><section className="wrap light contact-grid"><div className="contact-info"><h2>Tell us your vision.</h2><p>Imperial Sealing<br/>Woodbridge, ON L4H 1E2<br/>Canada</p><a href="tel:4165257077">(416) 525-7077</a><a href="tel:9058508232">(905) 850-8232</a><a href="mailto:info@imperialsealing.ca">info@imperialsealing.ca</a><p>Monday - Friday: 8:00AM - 6:00PM<br/>Saturday: 8:00AM - 3:00PM<br/>Sunday: Closed</p></div><Wizard/></section></>:<div dangerouslySetInnerHTML={{__html:page(path)}}/>}</main><div dangerouslySetInnerHTML={{__html:footer.replace('<span id="year"></span>',String(new Date().getFullYear()))}}/>{photo!==null&&path==="/gallery"&&<Lightbox index={photo} close={()=>setPhoto(null)} move={delta=>setPhoto(i=>(i+delta+galleryFiles.length)%galleryFiles.length)}/>}</div>}
createRoot(document.getElementById('root')).render(<App/>);

// Preview deployment check.
