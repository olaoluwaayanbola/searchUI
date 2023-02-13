import SearchBarStyles from "./Search.module.scss"

export const Cards = () => {
    return (
        <div className={SearchBarStyles.Container}>
            <div className={SearchBarStyles.Details}>
                <div className={SearchBarStyles.UserName}>
                    <div className={SearchBarStyles.Logo}>
                        {/* <img src="" alt="logoImage" /> */}
                    </div>
                    <h3>Lorem ipsum dolor</h3>
                </div>
                <div className={SearchBarStyles.Desc}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Veritatis ratione laborum tempore eum magnam rerum magni
                        natus consectetur!
                    </p>
                </div>
            </div>
        </div>
    )
}
