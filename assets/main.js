const mainTopicTitle = document.getElementsByClassName('main-topic-title');



const toggleTopics = (e) => {
    let targeted = e.target;

    targeted.parentElement.classList.toggle('active');

    if (targeted) {
        const main = targeted.parentElement;
        const subTopics = main.getElementsByClassName('sub-topics');

        for (subTopic of subTopics) {
            subTopic.classList = ('sub-topics');
        }

        for (let i = 0; i < mainTopicTitle.length; i++) {
            if (mainTopicTitle[i] !== targeted) {
                const selectSubs = mainTopicTitle[i].parentElement.getElementsByClassName('sub-topics');
                //selectSubs.classList = 'sub-topics hide';
                //console.log(i, selectSubs)
                for (topic of selectSubs) {
                    console.log(i, topic)
                    topic.classList = 'sub-topics hide';
                }

                if (mainTopicTitle[i].parentElement.classList.contains('active')) {
                    mainTopicTitle[i].parentElement.classList = ('main-topic');
                };

            }


        }




        // const prevSiblingClasses = mainTopicTitle[i].previousElementSibling;
        // const nextSiblingClasses = mainTopicTitle[i].nextElementSibling.classList;
        // const parentsClasses = mainTopicTitle[i].parentElement.classList;

        // if (prevSiblingClasses !== null) {
        //     prevSiblingClasses.toggle('hide');

        // }

        // if (nextSiblingClasses !== null) {
        //     nextSiblingClasses.toggle('hide');
        // }
    }
};

for (let i = 0; i < mainTopicTitle.length; i++) {
    mainTopicTitle[i].addEventListener('click', toggleTopics, false)
}