// UserInput component receives onChange function and userInput data as props
export default function UserInput({ onChange, userInput }) {
    return (

        // Main section for user input fields
        <section id="user-input">

            {/* First input group */}
            <div className="input-group">

                {/* Initial Investment Input */}
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        required

                        // Current value from state
                        value={userInput.initialInvestment}

                        // Updating initial investment value on change
                        onChange={(event) =>
                            onChange('initialInvestment', event.target.value)
                        }
                    />
                </p>

                {/* Annual Investment Input */}
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        required

                        // Current value from state
                        value={userInput.annualInvestment}

                        // Updating annual investment value on change
                        onChange={(event) =>
                            onChange('annualInvestment', event.target.value)
                        }
                    />
                </p>
            </div>

            {/* Second input group */}
            <div className="input-group">

                {/* Expected Return Input */}
                <p>
                    <label>Expected Return</label>
                    <input
                        type="number"
                        required

                        // Current value from state
                        value={userInput.expectedReturn}

                        // Updating expected return value on change
                        onChange={(event) =>
                            onChange('expectedReturn', event.target.value)
                        }
                    />
                </p>

                {/* Duration Input */}
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        required

                        // Current value from state
                        value={userInput.duration}

                        // Updating duration value on change
                        onChange={(event) =>
                            onChange('duration', event.target.value)
                        }
                    />
                </p>
            </div>
        </section>
    )
}