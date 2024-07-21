import { Link, useParams } from "react-router-dom"
import { appMainURL } from "../components/UrlHandler"
import { __ } from "../components/LanguageHandler"
import { useEffect, useState } from "react";
import { getLang } from "../components/ConfigHandler";
let spread_data = require('../datas/' + getLang() + '/spread_data.json');

function Spreads(params) {
    const [spreads, setSpreads] = useState(null);

    useEffect(() => {
        setSpreads(spread_data)
    }, []);
    
    return (
        <div className="flex justify-center w-screen">
            <div className="grid grid-cols-5 max-w-7xl">
                
                {spreads ? (
                <>
                    {spreads.map(item => (
                        <Link to={"/" + appMainURL + "/spread/" + item.name_short}>
                        <div className="flex flex-col p-2 text-center" key={item.name_short}>
                            <img src={'/spreads/' + item.img_name} className="my-5 pointer-events-none" alt="spread" />
                            <p className="text-xl">{item.name}</p>
                        </div>
                        </Link>
                    ))}
                </>
                ) : (
                <p>{__("Loading...")}</p>
                )}
            </div>
        </div>
    )
}

export default Spreads