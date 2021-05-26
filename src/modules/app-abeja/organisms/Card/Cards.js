import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import CardExampleCard from './Large/CardL'

function Cards({ category, state }) {


    return (
        <div>
            <h1>{category || "Funcionario"} {`del Departamento de ${state}` || ""}</h1>



            <Grid stackable centered columns={4}>
                <Grid.Column>
                    <CardExampleCard
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
                    <CardExampleCard
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
                    <CardExampleCard
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
                    <CardExampleCard
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
                    <CardExampleCard
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
                    <CardExampleCard
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
                    <CardExampleCard
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
                    <CardExampleCard
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
                    <CardExampleCard
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
