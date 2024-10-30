"use strict";let portfolio_companies_copy=[];async function get_portfolio_items(){const a="https://taybeh.co/wp-json/wp/v2/portfolio/";let b=0,c=0,d=[];try{let e=await fetch(`${a}?page=1&per_page=10&_embed=true`);if(e?.ok){b=parseInt(e?.headers?.get("X-Wp-Total")),c=parseInt(e?.headers?.get("X-Wp-Totalpages"));let f=await e?.json();for(let b=2;b<=c;b++)if(e=await fetch(`${a}?page=${b}&per_page=10&_embed=true`),e?.ok){let a=await e?.json();f=[...f,...a]}else throw new Error(`The network is returning ERROR: ${e.status}`);f.forEach(a=>{d=[...d,{title:a.title.rendered,slug:a.slug,link:a.link,published_date_gmt:a.date_gmt,investment_status:a?.acf?.investment_status,logo:a._embedded["wp:featuredmedia"][0].source_url,logo_width:a?.acf?.image_width_showcase_webpages,logo_height:a?.acf?.image_height_showcase_webpages}]})}else throw new Error(`The network is returning ERROR: ${e.status}`)}catch(a){throw new Error(`Error: ${a.message}`)}return d}async function show_portfolio_companies(a){a.preventDefault();let b=[],c="";const d=document.getElementById("portfolio-search-form"),e=document.querySelector("div.searchable-portfolio-company-logos");"click"===a.type&&d.reset();const f=new FormData(d),g=f.get("portfolio-name-search"),h=f.get("portfolio-item-sort"),i=f.get("portfolio-investment-status");0===portfolio_companies_copy.length?(b=await get_portfolio_items(),portfolio_companies_copy=[...b]):b=[...portfolio_companies_copy];"a-z"===h?b=[...portfolio_companies_copy].sort((c,a)=>c.title.localeCompare(a.title)):"z-a"===h?b=[...portfolio_companies_copy].sort((c,a)=>a.title.localeCompare(c.title)):"newest-first"===h?b=[...portfolio_companies_copy].sort((c,a)=>new Date(a.published_date_gmt)-new Date(c.published_date_gmt)):"oldest-first"===h?b=[...portfolio_companies_copy].sort((c,a)=>new Date(c.published_date_gmt)-new Date(a.published_date_gmt)):void 0;"current"===i?b=b.filter(a=>"current-holding"===a.investment_status):"exited"===i?b=b.filter(a=>"exited"===a.investment_status):void 0;0<g?.length&&(b=b.filter(a=>a.title.toLowerCase().includes(g.toLowerCase()))),b.forEach(a=>{c+=`<article class="portfolio-company-details d-flex justify-content-center align-items-center p-3">
      <a href="${a.link}" class="portfolio-company-page-link d-block" aria-labelledby="${a.slug}-company-name">
        <figure class="portfolio-company-logo-holder mb-0">
          <img width="${a.logo_width}" height="${a.logo_height}" loading="eager" decoding="async" src="${a.logo}" class="portfolio-company-logo img-fluid align-self-center px-2" alt="${a.title} Logo">
        </figure>
        <span id="${a.slug}-company-name" class="visually-hidden">${a.title}</span>
      </a>
    </article>`}),e.innerHTML=c}document.addEventListener("DOMContentLoaded",show_portfolio_companies),document.getElementById("portfolio-name-search").addEventListener("input",show_portfolio_companies),document.getElementById("portfolio-item-sort").addEventListener("change",show_portfolio_companies),document.getElementById("portfolio-investment-status").addEventListener("change",show_portfolio_companies),document.getElementById("portfolio-search-form-reset").addEventListener("click",show_portfolio_companies);
//# sourceMappingURL=searchable-portfolio.min.js.map