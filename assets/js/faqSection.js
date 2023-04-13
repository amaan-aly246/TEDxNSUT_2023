let faq 
// array of FAQ is placed after the code 

const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', () => {
  displayQuestions(faq);

  const questions = document.querySelectorAll('.question');

  // console.log(questions);

  questions.forEach((question) => {
    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click', () => {
      questions.forEach((curQuestion) => {
        if (curQuestion !== question) {
          curQuestion.classList.remove('show-text');
        }
      });
      question.classList.toggle('show-text');
    });
  });
});

// function to display questions

function displayQuestions(items) {
  let display = items.map(({ ques, answer }) => {
    return ` 
            <article class="question">
                <div class="question-title">
                    <P>${ques}</P>
                    <button type="button" class="question-btn">
                        <span class="plus-icon">
                            <i class="far fa-plus-square"></i>
                        </span>

                        <span class="minus-icon">
                            <i class="far fa-minus-square"></i>
                        </span>
                    </button>
                </div> 
                
                 <div class="question-text">
                    <p>${answer}</p>
                </div>
            </article>
          `;
  });
  display = display.join('');
  //   console.log(display);
  sectionCenter.innerHTML = display;
}


faq = [
  {
    ques: 'What is a TEDx event?',
    answer:
      'A TEDx event is a locally organized conference that follows the format of TED Talks and is licensed by TED. It features a range of speakers who deliver short, powerful talks on a variety of topics. ',
  },
  {
    ques: 'How many speakers would be attending the event?',
    answer: '8 speakers would grace the event. ',
  },
  {
    ques: `What is TEDxNSUT?`,
    answer: `One of the earliest TEDx events to be held in the Delhi Circuit was TEDxNSUT (formerly known as TEDxNSIT). It has always been a thrilling occasion where renowned speakers like Rohit Sardana, Hima Das, Surendra Mehra, IFS, etc. have taken the platform.
"`,
  },

  {
    ques: 'Is the TEDxNSUT event free to attend for all?',
    answer: 'TEDxNSUT Event is  completely free of cost.',
  },
  {
    ques: 'Where can I find the list of speakers?',
    answer:
      'The list of speakers can be found on all our social media platforms.',
  },
  {
    ques: 'What sets the TEDxNSUT apart from the other TEDx Events?',
    answer:
      'As being the oldest event organiser of TEDx , we have the experience of hosting many renowned speakers every year. Even COVID was unable to break our streak .',
  },
  {
    ques: 'What is the process for selecting speakers for TEDx events?',
    answer:
      'We invite emerging luminaries to speak at one of our Talks after a thorough assessment.',
  },
  {
    ques: 'Can I suggest a speaker or topic for a future TEDx event?',
    answer: 'You are welcome to reach out to us via our social media accounts.',
  },
  {
    ques: 'What is the difference between TED and TEDx',
    answer:
      'TED is the main organization that hosts conferences and events featuring speakers from various fields sharing their ideas and experiences. TEDx, on the other hand, refers to locally organized events that follow the same format and spirit as TED events but are independently organized by local communities. While TED events are curated by the main organization, TEDx events are curated by the local organizers.',
  },
  {
    ques: 'Will the TEDx event be recorded or livestreamed for those who cannot attend in person?',
    answer:
      'You are welcome to join us in person for this event, as it presents a chance to engage in an interactive session with the speaker. In case you are unable to attend in person, we will share the event on our social media channels for your convenience.',
  },
  {
    ques: 'How can I stay connected with the TEDxNSUT community after the event is over?',
    answer: `1. Follow the TEDxNSUT social media accounts on platforms like Facebook, Twitter, Instagram, and LinkedIn to stay updated on future events, initiatives, and news. 
2. Join TEDxNSUT groups or communities on social media or networking platforms to connect with other TEDxNSUT enthusiasts and continue the conversation. 
3. Volunteer for future TEDxNSUT events to remain involved in the community and contribute to its growth.`,
  },
  {
    ques: 'Are there any possibilities to connect with the speakers?',
    answer: 'Yes, TEDx events often provide opportunities for networking.',
  },
  {
    ques: `Are there any age restrictions for attending a TEDx event?`,
    answer: `Sure, you must be old enough to appreciate mind-blowing talks and innovative ideas! But in all seriousness, there are typically no age restrictions for attending a TEDx event, so everyone is welcome to join in on the fun and be inspired.`,
  },
  {
    ques: `What is the theme for this year's TEDx event ?`,
    answer: `Painting Portraits.`,
  },
  {
    ques: `Why should I attend TEDxNSUT?`,
    answer: `TEDxNSUT features speakers who are experts in their fields and have innovative ideas worth spreading. They can challenge you to think outside of the box, expand your perspective, and inspire you to take action in your personal and professional life.`,
  },
  {
    ques: `I am not a student of NSUT, can I attend the event?`,
    answer: `YES!!!`,
  },
  {
    ques: `For any chaos free entry what should be my reporting time `,
    answer: `No , TEDx is destined to bring change in society and we choose speakers on the basis of what they can reflect to society `,
  },
];