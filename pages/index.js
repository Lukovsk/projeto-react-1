import config from "../config.json";
import styled from "styled-components";

function HomePage() {
    const homePageStyle = { backgroundColor: "red" };

    console.log(config.playlists);

    return (
        <div style={homePageStyle}>
            <Menu />
            <Header />
            <TimeLine playlists={config.playlists} />
        </div>
    )
}

export default HomePage

function Menu() {

    return (
        <div>
            Menu
        </div>
    )
}

const StyledHeader = styled.div`
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header() {

    return (
        <StyledHeader>
            {/* <img src="banner" /> */}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function TimeLine(propriedades) {
    console.log("dentro do componente", propriedades);
    const playlistNames = Object.keys(propriedades.playlists);

    return (
        <div>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                console.log(playlistName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName} </h2>
                        <div>
                            {videos.map((video) => {
                                <a href={video.url} >
                                    <img src={video.thumb} />
                                    <span>
                                        {video.tittle}
                                    </span>
                                </a>
                            })}
                        </div>
                    </section>
                )
            })}
        </div>
    )
}