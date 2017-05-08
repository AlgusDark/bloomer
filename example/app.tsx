import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'bulma/css/bulma.css';

import {
    Tabs,
    Tab,
    TabLink,

    Pagination,
    PageControl,
    PageList,
    PageLink,

    Box,

    Button,

    Field,
    Control,

    Content,
} from '../src/index';

ReactDOM.render(
    <section className='section'>
        <div className='container'>
            <div className='section'>
                <Tabs isCentered>
                    <ul>
                        <Tab>
                            <TabLink>Pictures</TabLink>
                        </Tab>
                        <Tab isActive>
                            <TabLink>Music</TabLink>
                        </Tab>
                        <Tab>
                            <TabLink>Videos</TabLink>
                        </Tab>
                        <Tab>
                            <TabLink render={props => (<a {...props}>Documents</a>)} />
                        </Tab>
                    </ul>
                </Tabs>
            </div>

            <div className='section'>
                <Pagination>
                    <PageControl isPrevious disabled title="Sup nigga" render={props => <a {...props}>Previous</a>} />
                    <PageControl isNext>Next</PageControl>
                    <PageList>
                        <li>
                            <PageLink>1</PageLink>
                        </li>
                        <li>
                            <PageLink className='is-current'>2</PageLink>
                        </li>
                        <li>
                            <PageLink render={props => (<a {...props}>3</a>)} />
                        </li>
                        <li>
                            <PageLink isCurrent>4</PageLink>
                        </li>
                    </PageList>
                </Pagination>
            </div>

            <div className='section'>
                <Box>Hello World</Box>
            </div>

            <div className='section'>
                <Field isGrouped>
                    <Control isLoading>
                        <Button>This is a Button</Button>
                    </Control>
                    <Control>
                        <Button isPrimary>This is a Primary Button</Button>
                    </Control>
                    <Control>
                        <Button isSuccess>Success ;)</Button>
                    </Control>
                    <Control>
                        <Button isBlack isLoading render={(props) => <a {...props}>black magic</a>} />
                    </Control>
                </Field>
            </div>

            <div className='section'>
                <Content isMedium>
                    <ul>
                        <li>This</li>
                        <li>is</li>
                        <li>a</li>
                        <li>Content</li>
                        <li>list</li>
                    </ul>
                </Content>
            </div>

        </div>
    </section>,
    document.getElementById('root')
);