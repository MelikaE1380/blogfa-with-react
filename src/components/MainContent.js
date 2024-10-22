import Blogs from "./Blogs";

function MainContent() {
    return (
        <>

            <div id="main_container_news">
                <div id="news_box">
                    <div id="big_div">
                        <p> روی همه وبلاگها <span id="http_span">https</span> پشتیبانی از
                        </p>
                    </div>
                    <div id="small_div"><p>اخبار</p></div>
                </div>
            </div>


          
          <div id="blog_block">

          <div id="updated_blogs"><hr/><span>وبلاگ های به روز شده</span><hr/></div>

          <div id="blogs">

            <Blogs />
            <Blogs />
            <Blogs />
            <Blogs />
            <Blogs />
            <Blogs />
            <Blogs />
            <Blogs />
            <Blogs />

          </div>
          </div>
           


        </>

    )
}

export default MainContent;