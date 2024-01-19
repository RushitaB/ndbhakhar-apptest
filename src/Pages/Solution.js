

export default function Solution() {
    const solutions = [
        {icon:'icon-phone-sync', name:'Income Tax Return', desc:'As per the income tax laws, the return must be filed every year by an individual or business that earns any income during a financial year.'},
        {icon:'icon-user-sync', name:'Statutory Audit', desc:'A statutory audit is a legally required review of the accuracy of a company`s or government`s financial statements and records.'},
        {icon:'icon-device-cloud', name:'GST Return Filing', desc:'Comprehensive GST accounting platform that takes care of your business finance end-to-end. Create tax reports and file GST returns. Stay on top of tax compliance with us.'},
        {icon:'icon-cloud-dots', name:'Project Finance', desc:'Financial Structuring is an important part of business planning. Locating cost effective and best suited sources of finance for your project is our strength. '},
        {icon:'icon-phone-cloud', name:'Accounting', desc:'Accounting is the process of measuring, processing, and sharing financial and other information about businesses and corporations.'},
        {icon:'icon-device-sync', name:'Business Consultancy', desc:'We have been working with startups for the past several years. During this time we have developed a wealth of knowledge.'}
    ]
  return (
    <>
        <div key={'s-solution'} className="section-solution bg-linear pt-80 pb-80"> 
        <div key={'s-solution1'} className="container text-center">
          <div key={'s-solution2'} className="text-label text-blue text-center pt-4 pb-4 pl-12 pr-12 bg-grey bora-2 display-inline-block">How we do</div>
          <div key={"solution"} className="heading3 text-center mt-12">Our solutions</div>
          <div key={'s-solution3'} className="row row-gap-40 mt-40 sub-nav-solution">
          {
            solutions.map((solution, i)=>{
                return(
                    <>
                    <div key={i+'1'} className="col-12 col-xl-4 col-sm-6">
                    <div key={i} className="solution-item service-item nav-item-main p-40 bora-20 bg-white h-100" data-cate="IT Solutions" data-item="solution1"><a className="main-item flex-column-item-center" href="/#/service-detail"><i className={`${solution.icon} fs-60 text-blue`}></i>
                        <div className="service-name heading5 text-center mt-24">{solution.name}</div>
                        <div className="service-desc text-on-surface-variant1 text-center mt-12">{solution.desc}</div></a>
                    </div>
            </div>
                    </>
                )
            })
          }
          </div>
        </div>
      </div>
    </>
  )
}