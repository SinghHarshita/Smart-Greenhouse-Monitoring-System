import React, { Component, Fragment } from "react";
import { injectIntl} from 'react-intl';
import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import IntlMessages from "Util/IntlMessages";
import {
  Row,
  Card,
  CardBody,
  Input,
  CardTitle,
  FormGroup,
  Label,
  CustomInput,
  Button,
  FormText,
  Form,
  CardSubtitle
} from "reactstrap";
import Select from "react-select";
import CustomSelectInput from "Components/CustomSelectInput";
import DatePicker from "react-datepicker";
import moment from "moment";
import TagsInput from "react-tagsinput";

import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback
} from "availity-reactstrap-validation";
import "react-tagsinput/react-tagsinput.css";
import "react-datepicker/dist/react-datepicker.css";
import "rc-switch/assets/index.css";
import "rc-slider/assets/index.css";
import "react-rater/lib/react-rater.css";
import "react-fine-uploader/gallery/gallery.css";

const selectData = [
  { label: "Chocolate", value: "chocolate", key: 0 },
  { label: "Vanilla", value: "vanilla", key: 1 },
  { label: "Strawberry", value: "strawberry", key: 2 },
  { label: "Caramel", value: "caramel", key: 3 },
  { label: "Cookies and Cream", value: "cookiescream", key: 4 },
  { label: "Peppermint", value: "peppermint", key: 5 }
];

class FormsUi extends Component {
  constructor(props) {
    super(props);
    this.handleTagChange = this.handleTagChange.bind(this);
    this.handleTagChangeLabelOver = this.handleTagChangeLabelOver.bind(this);
    this.handleChangeDateLabelOver = this.handleChangeDateLabelOver.bind(this);
    this.handleTagChangeLabelTop = this.handleTagChangeLabelTop.bind(this);
    this.handleChangeLabelTop = this.handleChangeLabelTop.bind(this);
    this.handleChangeDateLabelTop = this.handleChangeDateLabelTop.bind(this);

    this.state = {
      selectedOption: "",
      selectedOptionLabelOver: "",
      selectedOptionLabelTop: "",
      startDate: null,
      startDateLabelOver: null,
      startDateLabelTop: null,
      startDateTime: null,
      startDateRange: null,
      endDateRange: null,
      embeddedDate: moment(),
      tags: [],
      tagsLabelOver: [],
      tagsLabelTop: []
    };
  }

  handleTagChange(tags) {
    this.setState({ tags });
  }

  handleTagChangeLabelOver(tagsLabelOver) {
    this.setState({ tagsLabelOver });
  }

  handleTagChangeLabelTop(tagsLabelTop) {
    this.setState({ tagsLabelTop });
  }

  handleChangeLabelOver = selectedOptionLabelOver => {
    this.setState({ selectedOptionLabelOver });
  };

  handleChangeLabelTop = selectedOptionLabelTop => {
    this.setState({ selectedOptionLabelTop });
  };

  handleChangeDateLabelOver(date) {
    this.setState({
      startDateLabelOver: date
    });
  }
  handleChangeDateLabelTop(date) {
    this.setState({
      startDateLabelTop: date
    });
  }

  render() {
    const {messages} = this.props.intl;
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
              heading={<IntlMessages id="menu.forms" />}
              match={this.props.match}
            />
            <Separator className="mb-5" />
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="forms.basic" />
                </CardTitle>
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">
                      <IntlMessages id="forms.email" />
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder={messages["forms.email"]}
                    />
                    <FormText color="muted">
                      <IntlMessages id="forms.email-muted" />
                    </FormText>
                  </FormGroup>

                  <FormGroup>
                    <Label for="passwordBasic">
                      <IntlMessages id="forms.password" />
                    </Label>
                    <Input
                      type="password"
                      name="passwordBasic"
                      id="passwordBasic"
                      placeholder={messages["forms.password"]}
                    />
                  </FormGroup>

                  <FormGroup>
                    <CustomInput
                      type="checkbox"
                      id="exampleCustomCheckbox"
                      label="Check this custom checkbox"
                    />
                  </FormGroup>

                  <Button color="primary" className="mt-4">
                    <IntlMessages id="forms.submit" />
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="forms.horizontal" />
                </CardTitle>
                <Form>
                  <FormGroup row>
                    <Label for="emailHorizontal" sm={2}>
                      <IntlMessages id="forms.email" />
                    </Label>
                    <Colxx sm={10}>
                      <Input
                        type="email"
                        name="email"
                        id="emailHorizontal"
                        placeholder={messages["forms.email"]}
                      />
                    </Colxx>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="passwordHorizontal" sm={2}>
                      <IntlMessages id="forms.password" />
                    </Label>
                    <Colxx sm={10}>
                      <Input
                        type="password"
                        name="password"
                        id="passwordHorizontal"
                        placeholder={messages["forms.password"]}
                      />
                    </Colxx>
                  </FormGroup>

                  <FormGroup row>
                    <Label sm={2} className="pt-0">
                      <IntlMessages id="forms.radios" />
                    </Label>
                    <Colxx sm={10}>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="radio1" />
                          <IntlMessages id="forms.first-radio" />
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="radio1" />
                          <IntlMessages id="forms.second-radio" />
                        </Label>
                      </FormGroup>
                      <FormGroup check disabled>
                        <Label check>
                          <Input type="radio" name="radio1" disabled />
                          <IntlMessages id="forms.third-radio-disabled" />
                        </Label>
                      </FormGroup>
                    </Colxx>
                  </FormGroup>

                  <FormGroup row>
                    <Label sm={2} className="pt-0">
                      <IntlMessages id="forms.checkbox" />
                    </Label>
                    <Colxx sm={10}>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" name="check1" /> Example
                          <IntlMessages id="forms.checkbox" />
                        </Label>
                      </FormGroup>
                    </Colxx>
                  </FormGroup>

                  <Button color="primary">
                    <IntlMessages id="forms.signin" />
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="forms.top-labels-over-line" />
                </CardTitle>

                <Form>
                  <Label className="form-group has-float-label">
                    <Input type="email" />
                    <IntlMessages id="forms.email" />
                  </Label>
                  <Label className="form-group has-float-label">
                    <Input type="password" />
                    <IntlMessages id="forms.password" />
                  </Label>
                  <div className="form-group has-float-label">
                    <TagsInput
                      value={this.state.tagsLabelOver}
                      onChange={this.handleTagChangeLabelOver}
                      inputProps={{ placeholder: messages["forms.tags"] }}
                    />
                    <IntlMessages id="forms.tags" />
                  </div>
                  <div className="form-group has-float-label">
                    <DatePicker
                      selected={this.state.startDateLabelOver}
                      onChange={this.handleChangeDateLabelOver}
                    />
                    <IntlMessages id="forms.date" />
                  </div>

                  <div className="form-group has-float-label">
                    <Select
                      components={{ Input: CustomSelectInput }}
                      className="react-select"
                      classNamePrefix="react-select"
                      name="form-field-name"
                      value={this.state.selectedOptionLabelOver}
                      onChange={this.handleChangeLabelOver}
                      options={selectData}
                    />
                    <IntlMessages id="forms.state" />
                  </div>

                  <Button color="primary">
                    <IntlMessages id="forms.submit" />
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="forms.top-labels-in-input" />
                </CardTitle>

                <Form>
                  <Label className="form-group has-top-label">
                    <Input type="email" />
                    <IntlMessages id="forms.email-u" />
                  </Label>
                  <Label className="form-group has-top-label">
                    <Input type="password" />
                    <IntlMessages id="forms.password-u" />
                  </Label>
                  <div className="form-group has-top-label">
                    <TagsInput
                      value={this.state.tagsLabelTop}
                      onChange={this.handleTagChangeLabelTop}
                      inputProps={{ placeholder: messages["forms.tags"]  }}
                    />
                    <IntlMessages id="forms.tags-u" />
                  </div>
                  <div className="form-group has-top-label">
                    <DatePicker
                      shouldCloseOnSelect={true}
                      selected={this.state.startDateLabelTop}
                      onChange={this.handleChangeDateLabelTop}
                    />
                    <IntlMessages id="forms.date-u" />
                  </div>

                  <div className="form-group has-top-label">
                    <Select
                      components={{ Input: CustomSelectInput }}
                      className="react-select"
                      classNamePrefix="react-select"
                      name="form-field-name"
                      value={this.state.selectedOptionLabelTop}
                      onChange={this.handleChangeLabelTop}
                      options={selectData}
                    />
                    <IntlMessages id="forms.state-u" />
                  </div>

                  <Button color="primary">
                    <IntlMessages id="forms.submit" />
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="forms.grid" />
                </CardTitle>
                <Form>
                  <FormGroup row>
                    <Colxx sm={6}>
                      <FormGroup>
                        <Label for="exampleEmailGrid">
                          <IntlMessages id="forms.email" />
                        </Label>
                        <Input
                          type="email"
                          name="exampleEmailGrid"
                          id="exampleEmailGrid"
                          placeholder={messages["forms.email"]}
                        />
                      </FormGroup>
                    </Colxx>

                    <Colxx sm={6}>
                      <FormGroup>
                        <Label for="examplePasswordGrid">
                          <IntlMessages id="forms.password" />
                        </Label>
                        <Input
                          type="password"
                          name="examplePasswordGrid"
                          id="examplePasswordGrid"
                          placeholder={messages["forms.password"]}
                        />
                      </FormGroup>
                    </Colxx>

                    <Colxx sm={12}>
                      <FormGroup>
                        <Label for="exampleAddressGrid">
                          <IntlMessages id="forms.address" />
                        </Label>
                        <Input
                          type="text"
                          name="exampleAddressGrid"
                          id="exampleAddressGrid"
                          placeholder={messages["forms.address"] }
                        />
                      </FormGroup>
                    </Colxx>

                    <Colxx sm={12}>
                      <FormGroup>
                        <Label for="exampleAddress2Grid">
                          <IntlMessages id="forms.address2" />
                        </Label>
                        <Input
                          type="text"
                          name="exampleAddress2Grid"
                          id="exampleAddress2Grid"
                          placeholder={messages["forms.address"] }
                        />
                      </FormGroup>
                    </Colxx>

                    <Colxx sm={6}>
                      <FormGroup>
                        <Label for="exampleEmailGrid">
                          <IntlMessages id="forms.city" />
                        </Label>
                        <Input
                          type="text"
                          name="exampleTextGrid"
                          id="exampleTextGrid"
                          placeholder={messages["forms.city"] }
                        />
                      </FormGroup>
                    </Colxx>

                    <Colxx sm={4}>
                      <FormGroup>
                        <Label>
                          <IntlMessages id="forms.state" />
                        </Label>
                        <Input type="select">
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                          <option>Option 4</option>
                          <option>Option 5</option>
                        </Input>
                      </FormGroup>
                    </Colxx>

                    <Colxx sm={2}>
                      <FormGroup>
                        <Label for="exampleZipGrid">
                          <IntlMessages id="forms.zip" />
                        </Label>
                        <Input
                          type="text"
                          name="exampleZipGrid"
                          id="exampleZipGrid"
                          placeholder={messages["forms.zip"] }
                        />
                      </FormGroup>
                    </Colxx>
                  </FormGroup>

                  <Button color="primary">
                    <IntlMessages id="forms.signup" />
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="forms.validation" />
                </CardTitle>
                <CardSubtitle>
                  <IntlMessages id="forms.default" />
                </CardSubtitle>

                <AvForm className="mb-5 row">
                  <Colxx sm={6}>
                    <AvGroup>
                      <Label className="av-label" for="avexampleName">
                        <IntlMessages id="forms.firstname" />
                      </Label>
                      <AvInput className="form-control" name="rank" id="avexampleName" required />
                      <AvFeedback>
                        <IntlMessages id="forms.firstname-message" />
                      </AvFeedback>
                    </AvGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <AvGroup>
                      <Label className="av-label" for="avexampleLastName">
                        <IntlMessages id="forms.lastname" />
                      </Label>
                      
                      <AvInput name="testit" id="avexampleLastName" required />
                      <AvFeedback>
                        <IntlMessages id="forms.lastname-message" />
                      </AvFeedback>
                    </AvGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <AvGroup>
                      <Label className="av-label" for="avexampleCity">
                        <IntlMessages id="forms.city" />
                      </Label>
                      <AvInput name="rank" id="avexampleCity" required />
                      <AvFeedback>
                        <IntlMessages id="forms.city-message" />
                      </AvFeedback>
                    </AvGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <AvGroup>
                      <Label className="av-label" for="avexampleState">
                        <IntlMessages id="forms.state" />
                      </Label>
                      <AvInput name="rank" id="avexampleState" required />
                      <AvFeedback>
                        <IntlMessages id="forms.state-message" />
                      </AvFeedback>
                    </AvGroup>
                  </Colxx>

                  <Colxx sm={12}>
                    <FormGroup>
                      <Button outline color="primary">
                        <IntlMessages id="forms.submit" />
                      </Button>
                    </FormGroup>
                  </Colxx>
                </AvForm>

                <CardSubtitle>Tooltip</CardSubtitle>

                <AvForm className="av-tooltip mb-5 row">
                  <Colxx sm={6}>
                    <AvGroup>
                      <Label className="av-label" for="avexampleNameTooltip">
                        <IntlMessages id="forms.firstname" />
                      </Label>
                      <AvInput name="rank" id="avexampleNameTooltip" required />
                      <AvFeedback>
                        <IntlMessages id="forms.firstname-message" />
                      </AvFeedback>
                    </AvGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <AvGroup>
                      <Label
                        className="av-label"
                        for="avexampleLastNameTooltip"
                      >
                        <IntlMessages id="forms.lastname" />
                      </Label>
                      <AvInput
                        name="rank"
                        id="avexampleLastNameTooltip"
                        required
                      />
                      <AvFeedback>
                        <IntlMessages id="forms.lastname-message" />
                      </AvFeedback>
                    </AvGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <AvGroup>
                      <Label className="av-label" for="avexampleCityTooltip">
                        <IntlMessages id="forms.city" />
                      </Label>
                      <AvInput name="rank" id="avexampleCityTooltip" required />
                      <AvFeedback>
                        <IntlMessages id="forms.city-message" />
                      </AvFeedback>
                    </AvGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <AvGroup>
                      <Label className="av-label" for="avexampleState">
                        <IntlMessages id="forms.state" />
                      </Label>
                      <AvInput
                        name="rank"
                        id="avexampleStateTooltip"
                        required
                      />
                      <AvFeedback>
                        <IntlMessages id="forms.state-message" />
                      </AvFeedback>
                    </AvGroup>
                  </Colxx>
                  <Colxx sm={12}>
                    <FormGroup>
                      <Button outline color="primary">
                        <IntlMessages id="forms.submit" />
                      </Button>
                    </FormGroup>
                  </Colxx>
                </AvForm>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
export default  injectIntl(FormsUi)