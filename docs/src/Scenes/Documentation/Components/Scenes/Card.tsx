import * as React from 'react';
import * as Highlight from 'react-highlight';

import TableDocs from './../../../../Components/TableDocs';
import { Docs } from './../../../../utils';

import {
    Card,
    CardContent,
    CardFooter,
    CardFooterItem,
    CardHeader,
    CardHeaderIcon,
    CardHeaderTitle,
    CardImage,
  } from './../../../../../../src';
import { Column, Columns, Container, Subtitle, Title } from './../../../../../../src';
import { Content, Icon, Image, Media, MediaContent, MediaLeft } from './../../../../../../src';
import { noModifiers, render } from './../../Overview/Scenes/Helpers';

const cardHeaderIconRows: Docs.Row[] = [
    render('CardHeaderIcon'),
];

const cardFooterItemRows: Docs.Row[] = [
    render('CardFooterItem'),
];

const CardExample = `<Card>
    <CardHeader>
        <CardHeaderTitle>
            Component
        </CardHeaderTitle>
        <CardHeaderIcon>
            <Icon className="fa fa-angle-down" />
        </CardHeaderIcon>
    </CardHeader>
    <CardImage>
        <Image isRatio='4:3' src='https://via.placeholder.com/1280x960' />
    </CardImage>
    <CardContent>
        <Media>
            <MediaLeft>
                <Image isSize='48x48' src='https://via.placeholder.com/96x96' />
            </MediaLeft>
            <MediaContent>
                <Title isSize={4}>John Wick</Title>
                <Subtitle isSize={6}>@John Wick</Subtitle>
            </MediaContent>
        </Media>
        <Content>
            People Keep Asking If I’m Back, And I Haven’t Really Had An Answer, But Now, Yeah, I’m Thinking I’m Back.
            <br/>
            <small>11:09 PM - 30 October 2014</small>
        </Content>
    </CardContent>
</Card>
`;

const CardDocs = (props) => (
    <Container>
        <Title>Card</Title>
        <Columns>
            <Column>
                <Card>
                    <CardHeader>
                        <CardHeaderTitle>
                            Component
                        </CardHeaderTitle>
                        <CardHeaderIcon>
                            <Icon className="fa fa-angle-down" />
                        </CardHeaderIcon>
                    </CardHeader>
                    <CardImage>
                        <Image isRatio="4:3" src="https://via.placeholder.com/1280x960" />
                    </CardImage>
                    <CardContent>
                        <Media>
                            <MediaLeft>
                                <Image isSize="48x48" src="https://via.placeholder.com/96x96" />
                            </MediaLeft>
                            <MediaContent>
                                <Title isSize={4}>John Wick</Title>
                                <Subtitle isSize={6}>@John Wick</Subtitle>
                            </MediaContent>
                        </Media>
                        <Content>
                            People Keep Asking If I’m Back, And I Haven’t Really Had An Answer, But Now, Yeah, I’m Thinking I’m Back.
                            <br />
                            <small>11:09 PM - 30 October 2014</small>
                        </Content>
                    </CardContent>
                    <CardFooter>
                        <CardFooterItem>Edit</CardFooterItem>
                        <CardFooterItem>Delete</CardFooterItem>
                    </CardFooter>
                </Card>
            </Column>
            <Column isSize={7}><Highlight>{CardExample}</Highlight></Column>
        </Columns>

        <hr />

        <Title>Card</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>CardHeader</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>CardHeaderTitle</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>CardHeaderIcon</Title>
        <TableDocs rows={cardHeaderIconRows} />

        <hr />

        <Title>CardContent</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>CardImage</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>CardFooter</Title>
        <Subtitle>{noModifiers}</Subtitle>
        <hr />

        <Title>CardFooterItem</Title>
        <Subtitle>
            By default, <strong>{'<CardFooterItem />'}</strong> renders a <strong>{'<p />'}</strong> element,
            but it will render an <strong>{'<a/>'}</strong> element if you provide <strong>href</strong> prop.
            <strong>E.g.</strong> <em><strong>{'<CardFooterItem href="#""/>'}</strong></em>.
        </Subtitle>
        <TableDocs rows={cardFooterItemRows} />
    </Container>
);

export default CardDocs;
