import * as React from 'react';
import * as Highlight from 'react-highlight';
import { Link } from 'react-router-dom';

import TableDocs from './../../../../Components/TableDocs';
import { Docs } from './../../../../utils';

import { Button, Checkbox, Control, Field, FieldBody, FieldLabel, File, FileCTA, FileIcon, FileInput,
  FileLabel, FileLabelText, FileName, Help, Icon, Input, Label, Radio, Select, TextArea } from './../../../../../../src';
import { Column, Columns, Container, Subtitle, Title } from './../../../../../../src';
import { isColor, isLoading, isSize, noModifiers, states } from './../../Overview/Scenes/Helpers';

const LabelRows: Docs.Row[] = [
    isSize,
];

const InputRows: Docs.Row[] = [
    isSize,
    isColor,
    ...states,
];

const TextAreaRows: Docs.Row[] = [
    isSize,
    ...states,
];

const SelectRows: Docs.Row[] = [
    isColor,
    isSize,
    isLoading,
];

const HelpRows: Docs.Row[] = [
    isColor,
];

const ControlRows: Docs.Row[] = [
    isLoading,
    {
        description: <td><code>left</code> | <code>right</code></td>,
        prop: 'hasIcons',
        type: 'bool | string | string[]',
    },
    {
        prop: 'isExpanded',
        type: 'bool',
    },
];

const FieldRows: Docs.Row[] = [
    {
        description: <td><code>right</code> | <code>centered</code></td>,
        prop: 'isGrouped',
        type: 'bool | string',
    },
    {
        description: <td><code>right</code> | <code>centered</code> | <code>fullwidth</code></td>,
        prop: 'hasAddons',
        type: 'bool | string',
    },
    {
        prop: 'isHorizontal',
        type: 'bool',
    },
];

const FieldLabelRows: Docs.Row[] = [
    isSize,
    {
        prop: 'isNormal',
        type: 'bool',
    },
];

const FormExample = `<Field>
    <Label>Name</Label>
    <Control>
        <Input type="text" placeholder='Text Input' />
    </Control>
</Field>

<Field>
    <Label>Username</Label>
    <Control hasIcons>
        <Input isColor='success' placeholder='Text Input' value='bloomer' />
        <Icon isSize='small' isAlign='left'>
            <span className="fa fa-user" aria-hidden="true" />
        </Icon>
        <Icon isSize='small' isAlign='right'>
            <span className="fa fa-check" aria-hidden="true" />
        </Icon>
    </Control>
    <Help isColor='success'>This username is available</Help>
</Field>

<Field>
    <Label>Select:</Label>
    <Control>
        <Select>
            <option>Option 1</option>
            <option>Option 2</option>
        </Select>
    </Control>
</Field>

<Field>
    <Label>Message</Label>
    <Control>
        <TextArea placeholder={'<TextArea />'} />
    </Control>
</Field>

<Field>
    <Control>
        <Checkbox> I agree </Checkbox>
    </Control>
</Field>

<Field>
    <Control>
        <Radio name="question"> Yes </Radio>
        <Radio name="question"> No </Radio>
    </Control>
</Field>

<Field isGrouped>
    <Control>
        <Button isColor='primary'>Submit</Button>
    </Control>
    <Control>
        <Button isLink>Cancel</Button>
    </Control>
</Field>

<Field>
    <Label>File Upload</Label>
    <Control>
        <File>
            <FileLabel>
                <FileInput />
                <FileCTA>
                    <FileIcon></FileIcon>
                    <FileLabelText>Choose a file...</FileLabelText>
                </FileCTA>
                <FileName>hello-world.txt</FileName>
            </FileLabel>
        </File>
    </Control>
</Field>
`;

const FieldHorizontalExample = `<Field isHorizontal>
<FieldLabel isNormal>
    <Label>From</Label>
</FieldLabel>
<FieldBody>
    <Field isGrouped>
        <Control isExpanded hasIcons='left'>
            <Input placeholder='Name' />
            <Icon isSize='small' isAlign='left'><span className="fa fa-user" aria-hidden="true"/></Icon>
        </Control>
    </Field>
    <Field>
        <Control hasIcons={['left', 'right']}>
            <Input isColor='success' placeholder='Email' value='john@wick.com' />
            <Icon isSize='small' isAlign='left'><span className='fa fa-envelope' /></Icon>
            <Icon isSize='small' isAlign='right'><span className='fa fa-check' /></Icon>
        </Control>
    </Field>
</FieldBody>
</Field>

<Field isHorizontal>
<FieldLabel isNormal>
    <Label>Question</Label>
</FieldLabel>
<FieldBody>
    <Field>
        <Control>
            <TextArea placeholder='Explain why 42 is the answer to the Ultimate Question of Life, the Universe and Everything' />
        </Control>
    </Field>
</FieldBody>
</Field>

<Field isHorizontal>
<FieldLabel /> {/* empty for spacing */}
<FieldBody>
    <Field>
        <Control>
            <Button>Submit</Button>
        </Control>
    </Field>
</FieldBody>
</Field>
`;

const FormDocs = (props) => (
    <Container>
        <Title>Form</Title>
        <Columns>
            <Column isSize="1/2">
                <Field>
                    <Label>Name</Label>
                    <Control>
                        <Input type="text" placeholder="Text Input" />
                    </Control>
                </Field>

                <Field>
                    <Label>Username</Label>
                    <Control hasIcons>
                        <Input isColor="success" placeholder="Text Input" value="bloomer" />
                        <Icon isSize="small" isAlign="left">
                            <span className="fa fa-user" aria-hidden="true"/>
                        </Icon>
                        <Icon isSize="small" isAlign="right">
                            <span className="fa fa-check" aria-hidden="true"/>
                        </Icon>
                    </Control>
                    <Help isColor="success">This username is available</Help>
                </Field>

                <Field>
                    <Label>Select:</Label>
                    <Control>
                        <Select>
                            <option>Option 1</option>
                            <option>Option 2</option>
                        </Select>
                    </Control>
                </Field>

                <Field>
                    <Label>Message</Label>
                    <Control>
                        <TextArea placeholder={'<TextArea />'} />
                    </Control>
                </Field>

                <Field>
                    <Control>
                        <Checkbox> I agree </Checkbox>
                    </Control>
                </Field>

                <Field>
                    <Control>
                        <Radio name="question"> Yes </Radio>
                        <Radio name="question"> No </Radio>
                    </Control>
                </Field>

                <Field isGrouped>
                    <Control>
                        <Button isColor="primary">Submit</Button>
                    </Control>
                    <Control>
                        <Button isLink>Cancel</Button>
                    </Control>
                </Field>

                <Field>
                    <Label>File Upload</Label>
                    <Control>
                        <File>
                            <FileLabel>
                                <FileInput />
                                <FileCTA>
                                    <FileIcon></FileIcon>
                                    <FileLabelText>Choose a file...</FileLabelText>
                                </FileCTA>
                                <FileName>hello-world.txt</FileName>
                            </FileLabel>
                        </File>
                    </Control>
                </Field>
            </Column>
            <Column isSize="1/2">
                <Highlight>{FormExample}</Highlight>
            </Column>
        </Columns>

        <hr />

        <Title>Label</Title>
        <TableDocs rows={LabelRows} />

        <hr />

        <Title>Input</Title>
        <TableDocs rows={InputRows} />

        <hr />

        <Title>TextArea</Title>
        <TableDocs rows={TextAreaRows} />

        <hr />

        <Title>Select</Title>
        <TableDocs rows={SelectRows} />

        <hr />

        <Title>Checkbox</Title>
        <Checkbox> {noModifiers} </Checkbox>

        <hr />

        <Title>Radio</Title>
        <Radio name="option"> {noModifiers} </Radio>

        <hr />

        <Title>Help</Title>
        <TableDocs rows={HelpRows} />

        <hr />

        <Title>Control</Title>
        <TableDocs rows={ControlRows} />

        <hr />

        <Title>Field</Title>
        <TableDocs rows={FieldRows} />

        <hr />

        <Title>Horizontal Form</Title>
        <Columns>
            <Column>
                <Field isHorizontal>
                    <FieldLabel isNormal>
                        <Label>From</Label>
                    </FieldLabel>
                    <FieldBody>
                        <Field isGrouped>
                            <Control isExpanded hasIcons="left">
                                <Input placeholder="Name" />
                                <Icon isSize="small" isAlign="left"><span className="fa fa-user" aria-hidden="true" /></Icon>
                            </Control>
                        </Field>
                        <Field>
                            <Control hasIcons={['left', 'right']}>
                                <Input isColor="success" placeholder="Email" value="john@wick.com" />
                                <Icon isSize="small" isAlign="left"><span className="fa fa-envelope" /></Icon>
                                <Icon isSize="small" isAlign="right"><span className="fa fa-check" /></Icon>
                            </Control>
                        </Field>
                    </FieldBody>
                </Field>

                <Field isHorizontal>
                    <FieldLabel isNormal>
                        <Label>Question</Label>
                    </FieldLabel>
                    <FieldBody>
                        <Field>
                            <Control>
                                {/* tslint:disable-next-line */ }
                                <TextArea placeholder="Explain why 42 is the answer to the Ultimate Question of Life, the Universe and Everything" />
                            </Control>
                        </Field>
                    </FieldBody>
                </Field>

                <Field isHorizontal>
                    <FieldLabel /> {/* empty for spacing */}
                    <FieldBody>
                        <Field>
                            <Control>
                                <Button>Submit</Button>
                            </Control>
                        </Field>
                    </FieldBody>
                </Field>
            </Column>
        </Columns>
        <Column>
            <Highlight>{FieldHorizontalExample}</Highlight>
        </Column>

        <hr />

        <Title>FieldBody</Title>
        <p>{noModifiers}</p>

        <hr />

        <Title>FieldLabel</Title>
        <TableDocs rows={FieldLabelRows} />
    </Container>
);

export default FormDocs;
