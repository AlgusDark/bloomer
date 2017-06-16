import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { noModifiers, render } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle } from './../../../../../../src';
import { Media, MediaContent, MediaLeft, MediaRight, } from './../../../../../../src';
import { Image, Delete, Content, } from './../../../../../../src';
import { Level, LevelLeft, LevelItem, Icon } from './../../../../../../src';

const MediaRows: Docs.Row[] = [
    {
        prop: 'isSize',
        type: 'string',
        description: <td><code>large</code></td>,
    }
];

const MediaExample = `<Media>
    <MediaLeft>
        <Image isSize='64x64' src='https://via.placeholder.com/128x128' />
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
                <LevelItem href='#'>
                    <Icon isSize='small'><span className="fa fa-reply" aria-hidden="true" /></Icon>
                </LevelItem>
                <LevelItem href='#'>
                    <Icon isSize='small'><span className="fa fa-retweet" aria-hidden="true" /></Icon>
                </LevelItem>
                <LevelItem href='#'>
                    <Icon isSize='small'><span className="fa fa-heart" aria-hidden="true" /></Icon>
                </LevelItem>
            </LevelLeft>
        </Level>
    </MediaContent>
    <MediaRight><Delete /></MediaRight>
</Media>
`;

const MediaDocs = (props) => (
    <Container>
        <Title>Media</Title>
        <Media style={{marginBottom: 15}}>
            <MediaLeft>
                <Image isSize='64x64' src='https://via.placeholder.com/128x128' />
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
            <MediaRight><Delete /></MediaRight>
        </Media>
        <Highlight>{MediaExample}</Highlight>
        <hr />

        <Title>Media</Title>
        <TableDocs rows={MediaRows} />

        <hr />

        <Title>MediaContent</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>MediaLeft</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>MediaRight</Title>
        <Subtitle>{noModifiers}</Subtitle>
    </Container>
)

export default MediaDocs;