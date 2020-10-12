import React, { Component } from 'react';
import { Drawer, Slot } from "./Components/Drawer";
import { Card } from "./Components/Card";

const cards = [
    {
        title : 'title 1',
    },
    {
        title : 'title 2',
    },
    {
        title : 'title 3',
    },
    {
        title : 'title 4',
    },
    {
        title : 'title 5',
    },
]

export class App extends Component {
    render() {
        return (
            <div className="shelf">
                <Slot>
                    <Drawer z={3} title={'A-D'} >
                        {cards.map((item,i) => {
                            return <Card
                                key={i}
                                {...item}
                            />
                        })}
                    </Drawer>
                </Slot>
                <Slot>
                    <Drawer z={3} title={'D-G'}/>
                </Slot>
                <Slot>
                    {/*<Drawer z={3} title={'G-J'} />*/}
                </Slot>
                
                <Slot>
                    <Drawer z={2} title={'J-M'} />
                </Slot>
                <Slot>
                    <Drawer z={2} title={'M-P'} />
                </Slot>
                <Slot>
                    <Drawer z={2} title={'P-S'} />
                </Slot>
                
                <Slot>
                    {/*<Drawer z={1} title={'S-V'} />*/}
                </Slot>
                <Slot>
                    <Drawer z={1} title={'V-Y'} />
                </Slot>
                <Slot>
                    <Drawer z={1} title={'Y-Z'} />
                </Slot>
            </div>
        );
    }
}
