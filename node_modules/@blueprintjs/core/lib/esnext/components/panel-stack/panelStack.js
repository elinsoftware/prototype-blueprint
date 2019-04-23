/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import classNames from "classnames";
import * as React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import * as Classes from "../../common/classes";
import { safeInvoke } from "../../common/utils";
import { PanelView } from "./panelView";
export class PanelStack extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            direction: "push",
            stack: [this.props.initialPanel],
        };
        this.handlePanelClose = (panel) => {
            const { stack } = this.state;
            // only remove this panel if it is at the top and not the only one.
            if (stack[0] !== panel || stack.length <= 1) {
                return;
            }
            safeInvoke(this.props.onClose, panel);
            this.setState(state => ({
                direction: "pop",
                stack: state.stack.filter(p => p !== panel),
            }));
        };
        this.handlePanelOpen = (panel) => {
            safeInvoke(this.props.onOpen, panel);
            this.setState(state => ({
                direction: "push",
                stack: [panel, ...state.stack],
            }));
        };
    }
    render() {
        const classes = classNames(Classes.PANEL_STACK, `${Classes.PANEL_STACK}-${this.state.direction}`, this.props.className);
        return (React.createElement(TransitionGroup, { className: classes, component: "div" }, this.renderCurrentPanel()));
    }
    renderCurrentPanel() {
        const { stack } = this.state;
        if (stack.length === 0) {
            return null;
        }
        const [activePanel, previousPanel] = stack;
        return (React.createElement(CSSTransition, { classNames: Classes.PANEL_STACK, key: stack.length, timeout: 400 },
            React.createElement(PanelView, { onClose: this.handlePanelClose, onOpen: this.handlePanelOpen, panel: activePanel, previousPanel: previousPanel })));
    }
}
//# sourceMappingURL=panelStack.js.map