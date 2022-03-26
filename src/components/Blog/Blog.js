import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <div className="question">
                <h2>How React Work</h2>
                <p>React হচ্ছে javascript এর একটি library। এর একটি নিজস্ব markup syntax রয়েছে যার নামে JSX। react মূলত browser DOM এর সাথে একটি virtual DOM ও create করে। এর পর react browser DOM and virtual DOM এর মধ্যে compare করে আর এভাবে virtual DOM create করার মাধ্যমে react বুজতে পারে কোথায় change হয়েছে এবং সে অনুযায়ী পরিবর্তন করে। এ ক্ষেত্রে react diff algorithm ব্যবহার করে।</p>
            </div>
            <div className="question">
                <h2>Difference Between Props And State</h2>
                <p className='text-left'><ul>
                    <li>Props শুধু read-only অর্থাৎ পরিবর্তন করা যায় না কিন্তু state এ পরিবর্তন করা যায়।</li>
                    <li>Props use করা হয় দুইটা component এর মধ্যে communication করার জন্য আর state use করা হয় component এর ভিতরের পরিবর্তনকে rendering করার জন্য।</li>
                    <li>Props একটি component থেকে আরেকটি component এ data argument হিসেবে pass করে অন্যদিকে state component এর data কে store করে রাখে।</li>
                    <li>Props এর মাধ্যমে component কে reusable করা যায় যেটা state এর মাধ্যমে করা যায় না।</li>
                </ul></p>
            </div>
        </div>
    );
};

export default Blog;