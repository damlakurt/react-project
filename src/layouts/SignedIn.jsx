import React from 'react'
import { Dropdown, Menu , Image} from 'semantic-ui-react'
export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://image.shutterstock.com/shutterstock/photos/1907126524/display_1500/stock-vector-set-of-vector-characters-avatars-in-flat-style-different-men-and-women-1907126524.jpg"/>
                    <Dropdown pointing="top left" text="Damla">
                        <Dropdown.Menu>
                            <Dropdown.Item text="Bilgilerim" icon="info"/>
                            <Dropdown.Item onClick={signOut}text="Çıkış Yap" icon="sign-out"/>
                        </Dropdown.Menu>
                    
                    </Dropdown>
              
            </Menu.Item>
        </div>
    )
}

