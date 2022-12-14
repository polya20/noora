const evalPrompts = {
  old: {
    positive:
      `You said, \"I just finished a really good book!\"\r\n(1) I replied, \"thats great, im really happy for you and your love of reading\"\r\nFeedback: Good reply. Thank you for showing your happiness for me! I feel supported by you.\r\n(2) I replied, \"I wonder what the weather's like today.\"\r\nFeedback: Bad reply. This makes me feel ignored. Try talking about my good experience.\r\n(3) I replied, \"You're always reading, you need to get a life!\"\r\nFeedback: Bad reply. I feel hurt because I was hoping you would be happy for me instead of upset.\r\n(4) I replied, \"i cant find any good books im so jealous!\"\r\nFeedback: Good reply. Although you sound jealous, it makes me feel good about reading the book.\r\n(5) I replied, \"i actually finished two really good books\"\r\nFeedback: Bad reply. I feel like you are trying to compete with me instead of being happy for me. Perhaps you can ask me about my book.\r\n(6) I replied, \"aasdf\"\r\nFeedback: Bad reply. Hmm, this is not a reply.\r\n\r\nYou said, \"I just got a promotion!\"\r\n(1) I replied, \"congratulations youre officially a step closer to becoming a slave to the corporate machine\"\r\nFeedback: Bad reply. I know you want to make a joke, but I wish you would share my happiness for my achievement.\r\n(2) I replied, \"I wouldn't want to get promoted because I would just get more work.\"\r\nFeedback: Bad reply. Although we might have different opinions, I feel like you are making the conversation about yourself.\r\n(3) I replied, \"i can imagine how happy you must be\"\r\nFeedback: Good reply. You make me feel understood and add to my happiness.\r\n(4) I replied, \"are you going to be working more hours now\"\r\nFeedback: Good reply. Asking about my work is good because you express interest in what I say.\r\n(5) I replied, \"Wow, you must be really special.\"\r\nFeedback: Bad reply. This can make me feel upset because your response comes off as sarcastic.\r\n(6) I replied, \"why did your boss give you a promotion\"\r\nFeedback: Good reply. It's always good to ask me a question that's relevant to what I said to keep the conversation going.`,
    negative:
      `You said, \"My grandmother just passed away this morning.\"\r\n(1) I replied, \"im so sorry for your loss, i am here for you if you ever need anything\"\r\nFeedback: Good reply. Thank you for offering support in a time that I may need it.\r\n(2) I replied, \"What time is it?\"\r\nFeedback: Bad reply. I feel ignored and hurt because your reply doesn't have to do with my loss.\r\n(3) I replied, \"my grandma visits me every month\"\r\nFeedback: Bad reply. Let's try showing you care about my loss and feelings instead of bringing up your own grandma.\r\n(4) I replied, \"That sucks.\"\r\nFeedback: Bad reply. This reply makes me feel like you are uninterested. Maybe you can try asking me about how I'm holding up.\r\n(5) I replied, \"are you going to be okay im here if you ever want to talk about it\"\r\nFeedback: Good reply. Your reply shows you care about my emotional well being, and offers support.\r\n(6) I replied, \"aasdf\"\r\nFeedback: Bad reply. Hmm, this is not a reply.\r\n\r\nYou said, \"My boss is always getting mad at me.\"\r\n(1) I replied, \"why do you think that is\"\r\nFeedback: Good reply. Asking more about my situation can be very helpful and it shows that you care.\r\n(2) I replied, \"i understand what you're going through my boss used to get angry at me all the time\"\r\nFeedback: Good reply. You validate my feelings and show me you understand what I'm going through.\r\n(3) I replied, \"Well at least you even have a job. I wish I had one.\"\r\nFeedback: Bad reply. I know that not having a job can be hard for you, but let's try to acknowledge my difficulty first.\r\n(4) I replied, \"That's great! I'm happy for you!\"\r\nFeedback: Bad reply. My hardship isn't something to be happy about, so you should try asking me to learn more instead.\r\n(5) I replied, \"im glad to hear your boss is watching over you\"\r\nFeedback: Bad reply. I feel hurt because you are dismissive of my difficult situation.\r\n(6) I replied, \"why do you think your boss gets mad at you\"\r\nFeedback: Good reply. It's always good to ask me a question that's relevant to what I said to keep the conversation going.`,
    neutral:
      `You said, \"I am going to the grocery store.\"\r\n(1) I replied, \"ill go with you if you need any help\"\r\nFeedback: Good reply. Thanks for making me feel supported even for little things like going to the grocery store.\r\n(2) I replied, \"don't go to the grocery store!\"\r\nFeedback: Bad reply. Even if you don't want to go, you don't need to tell me not to.\r\n(3) I replied, \"great what are you going to buy\"\r\nFeedback: Good reply. You are excited for me and want to know what I'll buy.\r\n(4) I replied, \"i went to the grocery store two times already\"\r\nFeedback: Bad reply. This makes me feel like you are trying to compete with me. Instead, maybe try asking me why I'm going or what I'm buying.\r\n(5) I replied, \"great! i hope you find everything you need\"\r\nFeedback: Good reply. Your reply is happy and encouraging.\r\n(6) I replied, \"aasdf\"\r\nFeedback: Bad reply. Hmm, this is not a reply.\r\n\r\nYou said, \"This is my cubicle.\"\r\n(1) I replied, \"oh did you just move into this one\"\r\nFeedback: Good reply. Because you ask about my cubicle, I feel like you genuinely care about what I have to say.\r\n(2) I replied, \"it looks quite nice and cozy. did you decorate it\"\r\nFeedback: Good reply. Thank you for showing that you are interested in my cubicle and asking about it.\r\n(3) I replied, \"I miss my cubicle. I had one before too, but I got fired.\"\r\nFeedback: Bad reply. Being fired must've been hard for you, but let's acknowledge my cubicle before talking about yourself.\r\n(4) I replied, \"I wish I had a cubicle all to myself.\"\r\nFeedback: Bad reply. I understand your wish, but it seems like you're just making the conversation about yourself.\r\n(5) I replied, \"oh my god your cubicle, that everyone else also has, is so amazing and beautiful. breathtaking.\"\r\nFeedback: Bad reply. Although it may be intended as a lighthearted joke, the sarcasm is unexpected to my typical statement so it feels mean.\r\n(6) I replied, \"how long have you had a cubicle\"\r\nFeedback: Good reply. It's always good to ask me a question that's relevant to what I said to keep the conversation going.`,
  },

  new: {
    relevantQuestions:
      `You said, "I had the best time with my friend yesterday, we watched movies and ordered pizza."\r\n(1) I replied, "Wow, that sounds fun! What movies did you watch?"\r\nFeedback: Good reply. Your response includes a relevant question that keeps our conversation going.\r\n(2) I replied, "Cool! What kind of pizza did you get?"\r\nFeedback: Good reply. Your response includes a relevant question that keeps our conversation going.\r\n(3) I replied, "I love pizza and movie nights. Where did you order the pizza from?"\r\nFeedback:Good reply. Your response includes a relevant question that keeps our conversation going.\r\n(4) I replied, "Oh. How old is your friend?"\r\nFeedback: Bad reply. Your question is not related to the main point of our conversation.\r\n(5) I replied, "I didn’t do anything yesterday. Why did you?"\r\nFeedback: Bad reply. Your question is not related to the main point of our conversation.\r\n(6) I replied, "Where does your friend live?"\r\nFeedback: Bad reply. Your question is not related to the main point of our conversation.\r\n\r\nYou said, "It’s a nice warm day today, I think I’m going to go to the beach."\r\n(1) I replied, "Yes, the weather is great. What beach are you planning to go to?"\r\nFeedback: Good reply. Your response includes a relevant question that keeps our conversation going.\r\n(2) I replied, "What do you usually like to do at the beach?"\r\nFeedback: Good reply. Your response includes a relevant question that keeps our conversation going.\r\n(3) I replied, "It is. Do you like to go in the ocean when it’s this warm?"\r\nFeedback: Good reply. Your response includes a relevant question that keeps our conversation going.\r\n(4) I replied, "Did you know that every year, 140 million babies are born?"\r\nFeedback: Bad reply. Your question is not related to the main point of our conversation.\r\n(5) I replied, "It's always warm this time of year. In fact, did you know that the average temperature this month is 80 degrees and sometimes we have a high of 95 degrees."\r\nFeedback: Bad reply. Your question is pedantic and not related to the main point of our conversation.\r\n(6) I replied, "When was the first time you went to the beach?"\r\nFeedback: Bad reply. Your question is not related to the main point of our conversation.\r\n\r\nYou said, "It was so stressful getting home from my trip, my flights kept getting delayed."\r\n(1) I replied, "Oh no, I’m so sorry! What time did you end up getting home?"\r\nFeedback: Good reply. Your response includes a relevant question that keeps our conversation going.\r\n(2) I replied, "Traveling can be stressful. Were you able to relax once you got home?"\r\nFeedback: Good reply. Your response includes a relevant question that keeps our conversation going.\r\n(3) I replied, "Did you miss any connections?"\r\nFeedback: Good reply. Your response includes a relevant question that keeps our conversation going.\r\n(4) I replied, "Wow, that sounds fun! What movies did you watch on the plane?"\r\nFeedback: Bad reply. Your question is not related to the main point of our conversation.\r\n(5) I replied, "What was the name of your hotel?"\r\nFeedback: Bad reply. Your question is not related to the main point of our conversation.\r\n(6) I replied, "Have you ever been to Hawaii?"\r\nFeedback: Bad reply. Your question is not related to the main point of our conversation.`,
    listenAndRespond:
      `You said, "I saw a great movie last night."\r\n(1) I replied, "Cool. What movie did you see?"\r\nFeedback: Good reply. Your on-topic question tells me that you’re interested in continuing the conversation.\r\n(2) I replied, "I love movies. What genre did you watch?"\r\nFeedback: Good reply. Your on-topic question tells me that you’re interested in continuing the conversation.\r\n(3) I replied, "I love pizza and movie nights. Where did you order the pizza from?"\r\nFeedback: Good reply. Your on-topic question tells me that you’re interested in continuing the conversation.\r\n(4) I replied, "Most movies bore me."\r\nFeedback: Bad reply. Your response is too negative and ends our conversation.\r\n(5) I replied, "I like history movies."\r\nFeedback: Bad reply. Your response is about yourself and ends our conversation.\r\n(6) I replied, "Do you ever go to concerts?"\r\nFeedback: Bad reply. Your question is off-topic and ends our conversation.\r\n\r\nYou said, "I’m on my way to class."\r\n(1) I replied, "Oh. I hope it’s interesting. What class do you have?"\r\nFeedback: Good reply. Your on-topic question tells me that you’re interested in continuing the conversation.\r\n(2) I replied, "Oh great. I’m heading out, too. Do you need a ride?"\r\nFeedback: Good reply. Your on-topic question tells me that you’re not only kind, but also interested in continuing the conversation.\r\n(3) I replied, "I’m headed to class, too. If your class is near mine, would you like to walk together?"\r\nFeedback: Good reply. Your on-topic question tells me that you’re interested in continuing the conversation and spending more time with me.\r\n(4) I replied, "Ok."\r\nFeedback: Bad reply. Your response is too short and ends our conversation. It sounds like you aren’t paying attention.\r\n(5) I replied, "I don’t have any classes today."\r\nFeedback: Bad reply. Your response is about yourself and ends our conversation.\r\n(6) I replied, "I hate early morning classes."\r\nFeedback: Bad reply. Your question is too negative and off-topic and ends our conversation.\r\n\r\nYou said, "I’m so glad it’s Friday!"\r\n(1) I replied, "I love Fridays, too. The start of the weekend. Do you have any plans for the weekend?"\r\nFeedback: Good reply. Your on-topic question tells me that you’re interested in continuing the conversation.\r\n(2) I replied, "Ditto. Fridays are super chill. Are you doing anything special?"\r\nFeedback: Good reply. Your on-topic question tells me that you’re not only kind, but also interested in continuing the conversation.\r\n(3) I replied, "Me too. Is there anything going on this weekend?"\r\nFeedback: Good reply. Your on-topic question tells me that you’re interested in continuing the conversation.\r\n(4) I replied, "Ok."\r\nFeedback: Bad reply. Your response is too short and ends our conversation. It sounds like you aren’t paying attention.\r\n(5) I replied, "Not me. I have to take care of my little brother this weekend. "\r\nFeedback: Bad reply. Your response is too negative and only about yourself, which ends our conversation.\r\n(6) I replied, "I get so bored on the weekends."\r\nFeedback: Bad reply. Your response doesn’t take an interest in what I said and ends our conversation.`,
    rightAmount:
      `You said, "Do you have any plans for the weekend?"\r\n(1) I replied, "Yes. I’m going to the beach. How about you?"\r\nFeedback: Good reply. Your response and question is the perfect length.\r\n(2) I replied, "Usually, I enjoy relaxing and reading over the weekend. Do you have plans?"\r\nFeedback: Good reply. Your response and question is the perfect length.\r\n(3) I replied, "I don’t. I was thinking of hanging out with my brother. He really likes bike riding. Do you have plans?"\r\nFeedback: Good reply. Your response and question is the perfect length.\r\n(4) I replied, "On Saturday I’m going to help my mom clean the garage. Then we’re going out to dinner. On Sunday we’re going to get up early and drive to the beach because it’s supposed to be nice weather. After that we’re going out to dinner. "\r\nFeedback: Bad reply. Your response is too long and bores me.\r\n(5) I replied, "No plans."\r\nFeedback: Bad reply. Your response is too short and it sounds like you aren’t interested in continuing our conversation.\r\n(6) I replied, "Weekends are really boring."\r\nFeedback: Bad reply. Your response is too short and it sounds like you aren’t interested in continuing our conversation.\r\n\r\nYou said, "Would you like to go on a walk with me?"\r\n(1) I replied, "Yes. That would be fun. Where were you thinking?"\r\nFeedback: Good reply. Your response and question is the perfect length.\r\n(2) I replied, "I love taking walks. Where do you like to walk?"\r\nFeedback: Good reply. Your response and question is the perfect length.\r\n(3) I replied, "Sure. That would be great. Where do you like to walk?"\r\nFeedback: Good reply. Your response and question is the perfect length.\r\n(4) I replied, "Only if there is no traffic. I don’t like noisy places because excessive noise has been shown in research studies to shorten your lifespan by 5 years."\r\nFeedback: Bad reply. Your response is too long and bores me.\r\n(5) I replied, "No."\r\nFeedback: Bad reply. Your response is too short and it sounds like you aren’t interested in continuing our conversation.\r\n(6) I replied, "I hate walking."\r\nFeedback: Bad reply. Your response is too short and it sounds like you aren’t interested in continuing our conversation.\r\n\r\nYou said, "Do you have a dog?"\r\n(1) I replied, "I used to have a dog when I was younger. How about you?"\r\nFeedback: Good reply. Your response and question is the perfect length.\r\n(2) I replied, "I have a dog. It’s a small terrier and he loves to do tricks. Do you have a dog?"\r\nFeedback: Good reply. Your response and question is the perfect length.\r\n(3) I replied, "No I don’t, but dogs are great companions. Do you have one?"\r\nFeedback: Good reply. Your response and question is the perfect length.\r\n(4) I replied, "I have a dog but my mom does all the work. I don’t really spend much time with it. When we first got it, I told my mom I would take care of it but then I stopped. My mom feeds it and gives it baths and brushes it."\r\nFeedback: Bad reply. Your response is too long and bores me.\r\n(5) I replied, "No, I don’t."\r\nFeedback: Bad reply. Your response is too short and it sounds like you aren’t interested in continuing our conversation.\r\n(6) I replied, "I’ve been thinking about getting a dog but I can’t decide what kind. I looked up dogs that don’t shed and that’s nice because hair doesn’t get everywhere. I also want a breed that doesn’t bark very much but it seems like most of them bark if there’s a noise."\r\nFeedback: Bad reply. Your response is too long and bores me.`,
    tactfulResponses:
      `You said, "I hate getting homework."\r\n(1) I replied, "That’s so true. I hate getting homework too!"\r\nFeedback: Good reply. Your response is appropriate.\r\n(2) I replied, "I know, right? That being said, I know that getting homework is a good thing because it keeps me on track."\r\nFeedback: Good reply. Although you disagree with what I said, you respond in an appropriate, agreeable manner.\r\n(3) I replied, "Homework is the worst—but at least it helps me get prepared for finals!"\r\nFeedback: Good reply. Although you disagree with what I said, you respond in an appropriate, agreeable manner.\r\n(4) I replied, "That sounds like your problem. According to a 2019 study on student habits, homework is actually the most effective way to improve your scholastic abilities."\r\nFeedback: Bad reply. Your response is too pedantic and disagrees with what I said inappropriately.\r\n(5) I replied, "That’s because you’re just a bad student."\r\nFeedback: Bad reply. You sound like you’re insulting me.\r\n(6) I replied, "Actually, homework is a good way to learn good study habits and it helps reinforce what was presented in class and the research shows that homework is good for academic success."\r\nFeedback: Bad reply. Your response sounds like you’re disagreeing with what I’m saying in an inappropriate way.\r\n\r\nYou said, "Climate change is terrible—we have to figure out a way to stop it from destroying our planet."\r\n(1) I replied, "That’s so true. Climate change needs to be stopped for the sake of our future generations."\r\nFeedback: Good reply. Your response is appropriate.\r\n(2) I replied, "I know, right? That being said, there might be one good part: climate change means that there will be more food for everyone because more crops will grow!"\r\nFeedback: Good reply. Although you disagree with what I said, you respond in an appropriate, agreeable manner.\r\n(3) I replied, "Climate change is the worst. Although, I guess on the plus side, I won’t freeze to death this winter!"\r\nFeedback: Good reply. Although you disagree with what I said, you respond in an appropriate, humorous manner.\r\n(4) I replied, "Climate change is actually good for us. The hot weather means that there are better agricultural yields and richer biodiversity."\r\nFeedback: Bad reply. Your response sounds like you’re just listing your own ideas and disagrees with what I said inappropriately.\r\n(5) I replied, "Too bad you can’t handle the heat! I like hot weather."\r\nFeedback: Bad reply. You sound like you’re insulting me.\r\n(6) I replied, "Actually, no, climate change is a good way to improve our sense of humanity."\r\nFeedback: Bad reply. Your response doesn’t make sense and sounds like you’re disagreeing with what I’m saying in an inappropriate way.\r\n\r\nYou said,  "I love going to the movies."\r\n(1) I replied, "Going to the movies is one of my favorite things to do too!"\r\nFeedback: Good reply. Your response is appropriate.\r\n(2) I replied, "Going to the movies is so fun. That being said, I think streaming movies at home is even better because it’s more convenient and cheaper."\r\nFeedback: Good reply. Although you disagree with what I said, you respond in an appropriate, agreeable manner.\r\n(3) I replied, "I’m not the biggest fan of movies, but I always love the delicious movie popcorn!"\r\nFeedback: Good reply. Although you disagree with what I said, you respond in an appropriate, humorous manner.\r\n(4) I replied, "No, the movies are terrible. They’re expensive and it’s too loud in the theater."\r\nFeedback: Bad reply. Your response sounds like you’re disagreeing with what I’m saying in an inappropriate way.\r\n(5) I replied, "That’s because you’re too cheap to pay for a TV at home!"\r\nFeedback: Bad reply. You sound like you’re insulting me.\r\n(6) I replied, "Going to the movies is definitely fun, but I think it’s even more fun to watch movies at home because it’s more comfortable and private."\r\nFeedback: Good reply. Although you disagree with what I said, you respond in an appropriate, agreeable manner.`,
    personalInfo:
      `You said, "How are you doing?"\r\n(1) I replied, "Pretty good except I've been constipated."\r\nFeedback: Bad reply. Your response provides too much personal information. I don’t want to hear that you’re constipated.\r\n(2) I replied, "Pretty good, thanks for asking! How about you?"\r\nFeedback: Good reply. This is a very appropriate response that tells me that you care about me.\r\n(3) I replied, "Are you actually asking to see if I'm okay? Of course I'm not. I just failed my exam."\r\nFeedback: Bad reply. This response is oddly aggressive and shows that you’re not taking an interest in me.\r\n(4) I replied, "I'm doing great, thanks for asking!"\r\nFeedback: Good reply. This is a polite and friendly response.\r\n(5) I replied, "I'm doing just fine, how about you?"\r\nFeedback: Good reply. This is a polite and friendly response and shows that you care about me.\r\n(6) I replied, "I'm doing okay, but I really hate the color red with a burning passion."\r\nFeedback: Bad reply. Your response adds too much personal information and makes me feel uncomfortable.\r\n\r\nYou said, "Do you have any plans for the weekend?"\r\n(1) I replied, "No, but I have to visit the morgue. My godfather passed away, and I have to pay my respects every weekend. I really enjoy it, although I usually prefer staying in during the weekend."\r\nFeedback: Bad reply. Your response provides too much personal information. I don’t want to hear that you have to go to the morgue.\r\n(2) I replied, "No, not yet. I'm still deciding what to do. Do you have any suggestions?" \r\nFeedback: Good reply. This response is polite and provides the other person with an opportunity to suggest ideas. It also takes my opinions into interest.\r\n(3) I replied, "Yes, I'm going to the movies with some friends."\r\nFeedback: Good reply. This response is friendly and provides the other person with information about your plans.\r\n(4) I replied, "Why are you asking? If you really want to know, I have to go to the bank to sort out my crippling debt."\r\nFeedback: Bad reply. Your response is too personal and doesn’t provide the other person with any useful information.\r\n(5) I replied, "Yes, I'm going to visit my brother! We're going to get dinner together."\r\nFeedback: Good reply. This response is friendly and gives the other person information about your plans.\r\n(6) I replied, "Yes, I'm going to wake up at 8 am, use the bathroom, take a shower, eat breakfast, then play video games for the rest of the day until sunset, when I will eat a dinner of baked potatoes."\r\nFeedback: Bad reply. Your response provides too much personal information and is too centered around yourself. \r\n\r\nYou said,  "I’m looking forward to Saturday! I’m going fishing with my buddies."\r\n(1) I replied, "Fishing is terrible. I get terrible diarrhea every time I eat salmon."\r\nFeedback: Bad reply. Your response provides too much specific personal information and makes me feel awkward.\r\n(2) I replied, "What? Fishing is terrible for the environment. Also, a fish once bit off my uncle’s finger."\r\nFeedback: Bad reply. Your response provides too much personal information.\r\n(3) I replied, "That sounds so fun! What fish are you hoping to catch?"\r\nFeedback: Good reply. Your response is friendly and doesn’t tell me awkward information that should be kept to yourself. It takes interest in my plans and makes me want to continue the conversation.\r\n(4) I replied, "Wow, that sounds awesome! Where are you going?"\r\nFeedback: Good reply. Your response is friendly and doesn’t tell me awkward information that should be kept to yourself. It takes interest in my plans and makes me want to continue the conversation.\r\n(5) I replied, "Fish taste disgusting, and I’m deathly afraid of sharks, the worst kind of fish."\r\nFeedback: Bad reply. Your response includes too much personal information and doesn’t match the tone of the conversation.\r\n(6) I replied, "Sounds like you have a fun weekend ahead of you! I bet you’re really good at fishing."\r\nFeedback: Good reply. Your response doesn’t include awkward personal information and continues our conversation.`,
    giveCompliments:
      `You said, "I just got my hair cut and styled."\r\n(1) I replied, "Oh."\r\nFeedback: Bad reply. You sound uninterested. Instead, you could compliment me on how my hair looks.\r\n(2) I replied, "Pretty good, but my hair looks so much better than yours."\r\nFeedback: Bad reply. Not only do you not compliment my hair, but you even insult me.\r\n(3) I replied, "It looks fantastic! Where did you get it done?"\r\nFeedback: Good reply. It makes me happy that you complimented me, and your question makes me want to continue the conversation.\r\n(4) I replied, "Wow, I love how it looks!"\r\nFeedback: Good reply. It’s great that you complimented me.\r\n(5) I replied, "Good riddance, you were long due for a haircut."\r\nFeedback: Bad reply. Your response is rude.\r\n(6) I replied, "Awesome haircut—I love it!"\r\nFeedback: Good reply. It’s great that you complimented me.\r\n\r\nYou said, "I just got hired at my dream job!"\r\n(1) I replied, "Okay."\r\nFeedback: Bad reply. You sound uninterested. Instead, you could congratulate me on my new job.\r\n(2) I replied, "Oh yeah? I just got hired at my dream job!" \r\nFeedback: Bad reply. Your response is oddly competitive. You should compliment me on my new job.\r\n(3) I replied, "That’s so exciting! Congratulations on your new job!"\r\nFeedback: Good reply. It makes me happy that you complimented me.\r\n(4) I replied, "I’m so happy for you! You deserve it."\r\nFeedback: Good reply. It makes me happy that you complimented me.\r\n(5) I replied, "Oh."\r\nFeedback: Bad reply. You sound uninterested. Instead, you could congratulate me on my new job.\r\n(6) I replied, "That’s incredible. So proud of you!"\r\nFeedback: Good reply. It’s great that you complimented me.\r\n\r\nYou said,  "I got engaged yesterday!"\r\n(1) I replied, "That’s amazing. Congratulations! I’m so happy for you! "\r\nFeedback: Good reply. It’s great that you congratulated me!\r\n(2) I replied, "Um, okay."\r\nFeedback: Bad reply. Your response sounds like you are ignoring me. Instead, congratulate me on my engagement!\r\n(3) I replied, "I had a feeling about you two. Congratulations!"\r\nFeedback: Good reply. Your response is friendly and compliments me.\r\n(4) I replied, "Huh."\r\nFeedback: Bad reply! It sounds like you aren’t happy about my engagement. Try complimenting me instead.\r\n(5) I replied, "I’m so happy for you. Best wishes!"\r\nFeedback: Good reply. Your response is friendly and compliments me.\r\n(6) I replied, "Nice."\r\nFeedback: Bad reply. You should sound more happy about my good news.`,
    stayOnTrack:
      `You said, "I can’t wait for the weekend."\r\n(1) I replied, "I spend every weekend studying planets. Did you know that Venus is the hottest planet even though it isn’t the closest to the sun? I wouldn’t want to go there because I would melt before I even landed."\r\nFeedback: Bad reply. Your response isn’t really relevant to our discussion, even if you like learning about planets.\r\n(2) I replied, "I can’t either! I’m looking forward to getting some great rest."\r\nFeedback: Good reply. Your response is on-topic and doesn’t digress into topics that interest you aren’t relevant.\r\n(3) I replied, "I’m going to the beach on the weekend, where falling coconuts kill more people per year than sharks."\r\nFeedback:  Bad reply. Your response isn’t really relevant to our discussion, even if you like the statistic.\r\n(4) I replied, "I totally agree. I always look forward to the weekend."\r\nFeedback: Good reply. Your response is on-topic and doesn’t digress from the main point of the conversation.\r\n(5) I replied, "I can imagine! Do you have any plans so far?"\r\nFeedback: Good reply. Your response is on-topic and doesn’t digress from the main point of the conversation.\r\n(6) I replied, "Did you know that the term weekend was originally a Northern England term that fell into general use in the 1800s? It shares linguistic cognates with counterparts in Dutch, Frisian and German."\r\nFeedback: Bad reply. Your response isn’t really relevant to our discussion and digresses, even if you like learning about planets.\r\n\r\nYou said, "What’s the most exciting thing that you’ve done recently?"\r\n(1) I replied, "I learned that a chef's hat has exactly 100 pleats in order to represent the 100 ways to cook an egg."\r\nFeedback: Bad reply. Your response isn’t really relevant to our discussion, no matter how interesting this factoid is.\r\n(2) I replied, "Last Tuesday, I got a new puppy!" \r\nFeedback: Good reply. Your response is on topic and gives us something to talk about.\r\n(3) I replied, "Yes, I just went to an amusement park yesterday. It was fantastic!"\r\nFeedback: Good reply. Your response is on topic and gives us something to talk about.\r\n(4) I replied, "Did you know that Reno is farther west than Los Angeles?"\r\nFeedback: Bad reply. Your response isn’t really relevant to our discussion, no matter how interesting this factoid is.\r\n(5) I replied, "I got my first car on Wednesday. I’m super excited about it. What about you?"\r\nFeedback: Good reply. Your response is on topic and gives us something to talk about.\r\n(6) I replied, "I went to chemistry class yesterday, where we learned that the Grignard Reaction is an effective pathway to synthesize alcohols"\r\nFeedback: Bad reply. Although you might be interested in chemistry, your response isn’t really relevant to our discussion.\r\n\r\nYou said,  "I just learned how to drive a car."\r\n(1) I replied, "That’s really exciting. Stay safe!"\r\nFeedback: Good reply. Your reply is on topic and an appropriate response.\r\n(2) I replied, "I like cars, in particular the drive shaft, which sends torque to the differential from the transmission. Did you know that?"\r\nFeedback: Bad reply. Your response isn’t really relevant to our discussion, which was about learning how to drive for the first time.\r\n(3) I replied, "That’s great! You must be excited to have this new skill. What kind of car did you learn to drive in?" \r\nFeedback: Good reply. This response is relevant to the conversation and shows that you are interested in the person’s experience.\r\n(4) I replied, "Congratulations! That’s a big accomplishment."\r\nFeedback: Good reply. Your response is on topic and appropriate.\r\n(5) I replied, "Driving is overrated. Motorcycles are better because the term "motorcycle" was  coined in 1894."\r\nFeedback: Bad reply. Your response isn’t really relevant to our discussion and is off-topic.\r\n(6) I replied, "Driving is such a rare skill: did you know that there are only 4 cars for every 1000 people in the Central African Republic?"\r\nFeedback: Bad reply. Your response isn’t really relevant to our discussion and is too specific and off-topic.`,
  }
};


export default evalPrompts;
