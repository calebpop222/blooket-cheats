(() => {
    const cheat = (async () => {
        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        stateNode.setState({
            bits: 0,
            ads: [],
            hazards: [],
            color: "",
            lol: false,
            joke: false,
            slow: false,
            dance: false,
            glitch: "",
            glitcherName: "",
            glitcherBlook: ""
        });
        clearTimeout(stateNode.adTimeout);
        clearInterval(stateNode.hazardInterval);
        clearTimeout(stateNode.nightTimeout);
        clearTimeout(stateNode.glitchTimeout);
        clearTimeout(stateNode.lolTimeout);
        clearTimeout(stateNode.jokeTimeout);
        clearTimeout(stateNode.slowTimeout);
        clearTimeout(stateNode.danceTimeout);
        clearTimeout(stateNode.nameTimeout);
    });
       cheat(); // Directly call the cheat function without checking for updates
})();
