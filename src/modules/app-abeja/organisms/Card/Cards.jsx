import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import CardL from './Large/CardL'

function Cards({ category, state, complement }) {


    return (
        <div>
            <h1>{category || "Funcionario"} {complement} {`${state || ""}` || ""}</h1>


            <Grid stackable centered columns={4}>
                <Grid.Column>
                    <CardL
                        img='https://picsum.photos/250/250'
                        title="Nombre"
                        subtitle="Partido"
                        description=""
                        attendance={80}
                        excused_absenteeism={40}
                        unexcused_absenteeism={20}
                        icon="clock"
                        icon2="clock outline"
                        votes_qty={1500}
                    />
                </Grid.Column>
                <Grid.Column>
                    <CardL
                        img='https://picsum.photos/250/250'
                        title="Nombre"
                        subtitle="Partido"
                        description=""
                        attendance={80}
                        excused_absenteeism={40}
                        unexcused_absenteeism={20}
                        icon="clock"
                        icon2="clock outline"
                        votes_qty={1500}
                    />
                </Grid.Column>
                <Grid.Column>
                    <CardL
                        img='https://picsum.photos/250/250'
                        title="Nombre"
                        subtitle="Partido"
                        description=""
                        attendance={80}
                        excused_absenteeism={40}
                        unexcused_absenteeism={20}
                        icon="clock"
                        icon2="clock outline"
                        votes_qty={1500}
                    />
                </Grid.Column>
                <Grid.Column>
                    <CardL
                        img='https://picsum.photos/250/250'
                        title="Nombre"
                        subtitle="Partido"
                        description=""
                        attendance={80}
                        excused_absenteeism={40}
                        unexcused_absenteeism={20}
                        icon="clock"
                        icon2="clock outline"
                        votes_qty={1500}
                    />
                </Grid.Column>
                <Grid.Column>
                    <CardL
                        img='https://picsum.photos/250/250'
                        title="Nombre"
                        subtitle="Partido"
                        description=""
                        attendance={80}
                        excused_absenteeism={40}
                        unexcused_absenteeism={20}
                        icon="clock"
                        icon2="clock outline"
                        votes_qty={1500}
                    />
                </Grid.Column>
                <Grid.Column>
                    <CardL
                        img='https://picsum.photos/250/250'
                        title="Nombre"
                        subtitle="Partido"
                        description=""
                        attendance={80}
                        excused_absenteeism={40}
                        unexcused_absenteeism={20}
                        icon="clock"
                        icon2="clock outline"
                        votes_qty={1500}
                    />
                </Grid.Column>
                <Grid.Column>
                    <CardL
                        img='https://picsum.photos/250/250'
                        title="Nombre"
                        subtitle="Partido"
                        description=""
                        attendance={80}
                        excused_absenteeism={40}
                        unexcused_absenteeism={20}
                        icon="clock"
                        icon2="clock outline"
                        votes_qty={1500}
                    />
                </Grid.Column>
                <Grid.Column>
                    <CardL
                        img='https://picsum.photos/250/250'
                        title="Nombre"
                        subtitle="Partido"
                        description=""
                        attendance={80}
                        excused_absenteeism={40}
                        unexcused_absenteeism={20}
                        icon="clock"
                        icon2="clock outline"
                        votes_qty={1500}
                    />
                </Grid.Column>
                <Grid.Column>
                    <CardL
                        img='https://picsum.photos/250/250'
                        title="Nombre"
                        subtitle="Partido"
                        description=""
                        attendance={80}
                        excused_absenteeism={40}
                        unexcused_absenteeism={20}
                        icon="clock"
                        icon2="clock outline"
                        votes_qty={1500}
                    />
                </Grid.Column>

            </Grid>

        </div>
    )
}

export default Cards
