import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <div className="modal fade" id="about" tabIndex="-1" role="dialog" aria-labelledby="aboutLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="aboutLabel">সাইট সম্পর্কে</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body text-justify">
                        এই সাইটের সমস্ত ডাটা <a href="https://quran.com"  target="_blank" rel='noreferrer noopener'>quran.com</a> এর API ব্যবহার করে প্রদর্শিত। তথ্যগত যেকোনো অখণ্ডতা উক্ত সাইটের মাধ্যমে নিশ্চিত।
                        শখের প্রজেক্ট হিসেবে এটি <a href="https://nuhil.net" target="_blank" rel='noreferrer noopener'>নুহিল</a> দ্বারা
                        প্রস্তুতকৃত এবং <a href="https://medium.com/@me_shaon" target="_blank" rel='noreferrer noopener'>শাওন</a> কর্তৃক পরিবর্ধিত। সোর্সকোড উন্মুক্ত <a href="https://github.com/nuhil/banglaquran.online" target="_blank" rel='noreferrer noopener'>এখানে</a>। জিরো কনফিগার‍্যাবল, মিনিমাল সার্ভিস হিসেবে শুধু পবিত্র কুরআনের আয়াত গুলোর বাংলা অনুবাদ যুক্ত করা হয়েছে। <small>(Alpha Version)</small>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default About;
