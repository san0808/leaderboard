import React from "react";

const profiles = [
    {
        username: "zeroman",
        displayName: "Zero Man",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        easyProblemsSolved: 10,
        mediumProblemsSolved: 20,
        hardProblemsSolved: 30,
        golableRank: 213051,
        percentageRank: 0.1,
    },
    {
        username: "ionut",
        displayName: "Ionut",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        easyProblemsSolved: 23,
        mediumProblemsSolved: 20,
        hardProblemsSolved: 10,
        golableRank: 43213,
        percentageRank: 0.2,
    },
    {
        usernamae: "stefan",
        displayName: "Stefan",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        easyProblemsSolved: 10,
        mediumProblemsSolved: 20,
        hardProblemsSolved: 30,
        golableRank: 213051,
        percentageRank: 0.1,
    },
];

const LeaderBoardPage = () => {
    return (
        <div className='bg-stone-100 flex justify-center align-middle '>
            <div className='bg-white rounded-lg shadow-lg p-4 w-11/12 md:w-1/2 lg:w-1/3'>
                <div>
                    <h2>Leaderboard</h2>
                    <h1>Stuli Bomb</h1>
                </div>
                <div>
                    <div>
                        <div>Today</div>
                        <div>Last 30 Days</div>
                        <div>All time</div>
                    </div>
                </div>
                <div>
                    <div>
                        {profiles.map((profile) => (
                            <div>
                                <div>
                                    <div>
                                        <img src={profile.avatar} alt='avatar' />
                                    </div>
                                    <div>
                                        <div>{profile.displayName}</div>
                                        <div>{profile.username}</div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div>{profile.easyProblemsSolved}</div>
                                        <div>Easy</div>
                                    </div>
                                    <div>
                                        <div>{profile.mediumProblemsSolved}</div>
                                        <div>Medium</div>
                                    </div>
                                    <div>
                                        <div>{profile.hardProblemsSolved}</div>
                                        <div>Hard</div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div>{profile.golableRank}</div>
                                        <div>Global Rank</div>
                                    </div>
                                    <div>
                                        <div>{profile.percentageRank}</div>
                                        <div>Percentage Rank</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button>View All</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeaderBoardPage;
