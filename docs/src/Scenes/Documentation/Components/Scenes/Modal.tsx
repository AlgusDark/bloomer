import * as React from 'react';
import * as Highlight from 'react-highlight';
import { Link } from 'react-router-dom';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { noModifiers, render, isSize } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle } from './../../../../../../src';
import { Button, Columns, Column, Box, Media, MediaContent, MediaLeft, MediaRight, Icon, Delete, Image } from './../../../../../../src';
import { Level, LevelItem, LevelLeft, LevelRight, Content } from './../../../../../../src';
import { Modal, ModalBackground, ModalContent, ModalClose } from './../../../../../../src';
import { ModalCardHeader, ModalCardTitle, ModalCardBody, ModalCardFooter, ModalCard } from './../../../../../../src';

const ModalRows: Docs.Row[] = [
    {
        prop: 'isActive',
        type: 'bool',
    },
];

const ModalCloseRows: Docs.Row[] = [
    isSize,
    render('ModalClose'),
];

const ModalBasic = ({ isActive, launchModal }) => (
    <Modal isActive={isActive}>
        <ModalBackground onClick={launchModal} />
        <ModalContent>
            <Box>
                <Media style={{ marginBottom: 15 }}>
                    <MediaLeft>
                        <Image isSize='64x64' src='http://via.placeholder.com/128x128' />
                    </MediaLeft>
                    <MediaContent>
                        <Content>
                            <p>
                                <strong>John Wick</strong> <small>@JohnWick</small> <small>31m</small>
                                <br />
                                People Keep Asking If I’m Back, And I Haven’t Really Had An Answer, But Now, Yeah, I’m Thinking I’m Back.
                                        </p>
                        </Content>
                        <Level isMobile>
                            <LevelLeft>
                                <LevelItem href='#documentation/components/media'>
                                    <Icon isSize='small'><span className="fa fa-reply" aria-hidden="true" /></Icon>
                                </LevelItem>
                                <LevelItem href='#documentation/components/media'>
                                    <Icon isSize='small'><span className="fa fa-retweet" aria-hidden="true" /></Icon>
                                </LevelItem>
                                <LevelItem href='#documentation/components/media'>
                                    <Icon isSize='small'><span className="fa fa-heart" aria-hidden="true" /></Icon>
                                </LevelItem>
                            </LevelLeft>
                        </Level>
                    </MediaContent>
                    <MediaRight><Delete onClick={launchModal} /></MediaRight>
                </Media>
            </Box>
        </ModalContent>
        <ModalClose onClick={launchModal} />
    </Modal>
);

const ModalCardBasic = ({ isActive, launchModal }) => (
    <Modal isActive={isActive}>
        <ModalBackground onClick={launchModal} />
        <ModalCard>
            <ModalCardHeader>
                <ModalCardTitle>ModalCard Title</ModalCardTitle>
                <Delete onClick={launchModal} />
            </ModalCardHeader>
            <ModalCardBody>
                <Content>
                    <h1>Hello World</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,
                        metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum
                        justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin
                        vel erat vel, interdum mattis neque.
                    </p>
                </Content>
            </ModalCardBody>
            <ModalCardFooter>
                <Button isColor='success'>Save</Button>
                <Button isColor='warning' onClick={launchModal}>Cancel</Button>
            </ModalCardFooter>
        </ModalCard>
    </Modal>
)

const ModalBasicExample = `<Modal>
    <ModalBackground />
    <ModalContent>
        {/* Any other Bulma elements you want */}
    </ModalContent>
    <ModalClose />
</Modal>
`;

const ModalCardExample = `<Modal>
    <ModalBackground />
    <ModalCard>
        <ModalCardHeader>
            <ModalCardTitle>ModalCard Title</ModalCardTitle>
            <Delete />
        </ModalCardHeader>
        <ModalCardBody>
            {/* Your Content  */}
        </ModalCardBody>
        <ModalCardFooter>
            <Button isColor='success'>Save</Button>
            <Button isColor='warning'>Cancel</Button>
        </ModalCardFooter>
    </ModalCard>
</Modal>
`;

class ModalDocs extends React.Component<{}, { isActive: boolean, isActiveCard: boolean }>{
    state = {
        isActive: false,
        isActiveCard: false,
    }

    launchModal = () => this.setState(state => ({ ...state, isActive: !state.isActive }))
    launchModalCard = () => this.setState(state => ({ ...state, isActiveCard: !state.isActiveCard }))

    render() {
        return (
            <Container>
                <Title>Modal</Title>
                <Button style={{ marginBottom: 15 }} onClick={this.launchModal} isColor='primary'>Launch Modal Example</Button>
                <Highlight>{ModalBasicExample}</Highlight>
                <Content>
                    <p>To activate the {'<Modal>'}, just add <code>isActive</code> prop on {'<Modal>'}</p>
                </Content>
                <hr />

                <Title>Modal</Title>
                <TableDocs rows={ModalRows} />

                <hr />

                <Title>ModalBackground</Title>
                <p>{noModifiers}</p>

                <hr />

                <Title>ModalContent</Title>
                <p>{noModifiers}</p>

                <hr />

                <Title>ModalClose</Title>
                <TableDocs rows={ModalCloseRows} />

                <hr />

                <Title>Modal Card</Title>
                <Button style={{ marginBottom: 15 }} onClick={this.launchModalCard} isColor='success'>Launch ModalCard Example</Button>
                <Highlight>{ModalCardExample}</Highlight>
                <hr />

                <Title>ModalCard</Title>
                <p>{noModifiers}</p>

                <hr />

                <Title>ModalCardHeader</Title>
                <p>{noModifiers}</p>

                <hr />

                <Title>ModalCardTitle</Title>
                <p>{noModifiers}</p>

                <hr />

                <Title>ModalCardBody</Title>
                <p>{noModifiers}</p>

                <hr />

                <Title>ModalCardFooter</Title>
                <p>{noModifiers}</p>

                {/* Modals */}
                <ModalBasic isActive={this.state.isActive} launchModal={this.launchModal} />
                <ModalCardBasic isActive={this.state.isActiveCard} launchModal={this.launchModalCard} />
                {/* Modals */}
            </Container>
        )
    }
}

export default ModalDocs;