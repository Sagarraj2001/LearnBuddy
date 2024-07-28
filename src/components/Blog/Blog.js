import React from 'react'
import Footer from '../Footer/Footer'
import BlogCard from './BlogCard'
import TopCard from '../Common/TopCard'

export default function Blog() {
  return (
    <>
      <TopCard title="Our Blog" />
      <div className="row row-cols-1 row-cols-md-4 g-4 mt-3 mx-3">

        <BlogCard
          src="https://blog.codingblocks.com/content/images/size/w2000/2024/04/How-to-manage-dsa-and-development-together_Banner.png"
          href="https://blog.codingblocks.com/2024/how-to-manage-both-dsa-and-development-together/"
          title="How to Manage Both DSA and Development Together?"
          description="In today's tech-driven world, mastering Data Structures and Algorithms (DSA) is fundamental for every aspiring developer."
          author="SANYA WADHWANI"
          date="09/04/2024"
        />
        <BlogCard
          src="https://blog.codingblocks.com/content/images/size/w2000/2020/07/DataScience.jpg"
          href="https://blog.codingblocks.com/2020/what-is-data-science-machine-learning-ai-deep-learning-and-big-data-and-whats-the-difference/"
          title="What are Data Science, Machine Learning, AI, Deep Learning, and Big Data?"
          description="With the internet boom and the exponential rise of various businesses in the form of start-ups; Data has become an inextricable part of business growth."
          author="MUSKAN"
          date="28/07/2020"
        />
        <BlogCard
          src="https://blog.codingblocks.com/content/images/size/w2000/2020/04/Artboard-1-copy-2a.jpg"
          href="https://blog.codingblocks.com/2020/social-distancing-unleashing-the-productivity-of-coders/"
          title="Social Distancing: Unleashing the Productivity of Coders"
          description="Social Distancing can expose you to many unpredictable fears that can tamper with your mental peace. Everything coming to a standstill is explicitly affecting the movement of the education of the students."
          author="ANUSHKA BAHUGUNA"
          date="07/04/2020"
        />
        <BlogCard
          src="https://blog.codingblocks.com/content/images/size/w2000/2024/04/Large-Language-Model_Banner.png"
          href="https://blog.codingblocks.com/2024/large-language-model-llm/"
          title="Large Language Model (LLM)"
          description="Using deep learning, LLMs dive into the complex world of characters, words, and sentences, figuring out their intricate patterns with amazing accuracy. Through this learning journey, they become skilled at understanding human language and picking up on context and patterns all on their own."
          author="SANYA WADHWANI"
          date="08/04/2024"
        />
        <BlogCard
          src="https://blog.codingblocks.com/content/images/size/w2000/2020/06/git.jpg"
          href="https://blog.codingblocks.com/2020/git-github-a-coders-guide-to-programming/"
          title="Git & GitHub - A Coder's Guide to Programming"
          description="whether you are an amateur coder or a professional programmer, Git and GitHub become an indispensable part of your everyday life."
          author="MUSKAN"
          date="26/06/2020"
        />
        <BlogCard
          src="https://blog.codingblocks.com/content/images/size/w2000/2020/06/Untitled-17.jpg"
          href="https://blog.codingblocks.com/2020/from-hell-to-paradise-with-data-analytics-a-beginners-guide-to-analytics/"
          title="From Hell to Paradise, with Data Analytics | A Beginner's Guide to Analytics"
          description="Data Analytics involves the process through which a huge amount of raw data is processed and analysed to find trends and insightful learning for boosting business and profit."
          author="ANUSHKA BAHUGUNA"
          date="08/06/2020"
        />
        <BlogCard
          src="https://blog.codingblocks.com/content/images/size/w2000/2020/07/skills-of-cp.jpg"
          href="https://blog.codingblocks.com/2020/a-beginners-guide-to-the-skills-you-learn-in-competitive-programming-course/"
          title="A Beginner's Guide to the Skills you Learn in Competitive Programming Course"
          description="The present and the coming age is the age of technology. Technology works on development and the development of technology relies on tech-geeks or programmers."
          author="MUSKAN"
          date="04/07/2020"
        />
        <BlogCard
          src="https://blog.codingblocks.com/content/images/size/w2000/2020/08/Android-Blog.jpg"
          href="https://blog.codingblocks.com/2020/a-thorough-guide-to-android-development-for-beginners/"
          title="A thorough guide to Android Development for Beginners"
          description="In the 21st century, mobile applications have become quite a significant enabler of global engagement in various creative ways. The ever-increasing usage of mobile apps has changed our ways of learning"
          author="MUSKAN"
          date="12/08/2020"
        />
      </div>
      <div className="mt-3">
        <Footer />
      </div>

    </>
  )
}
