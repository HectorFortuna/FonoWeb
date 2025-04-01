import React from "react";
import {
    Box,
    TextField,
    Button,
    FormControl,
    FormLabel,
    RadioGroup,
    Checkbox,
    FormControlLabel,
    Radio,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormStore } from "../../states/ZustandCache";

export const HabitsAndTicks: React.FC = () => {
    const { habitsAndTicksFormData, setHabitsAndTicksField } = useFormStore();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/pacientes/novo/relacao-familiar");
    };

    const handleBack = () => {
        navigate("/pacientes/novo/recreacao");
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                backgroundColor: "#FAFAFA",
                border: "1px solid #E0E0E0",
                borderRadius: 2,
                p: 3,
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: 600,
                margin: "40px auto",
            }}
        >
            {/* Uso de chupeta */}
            <TextField
                label="Usou chupeta?"
                fullWidth
                variant="outlined"
                value={habitsAndTicksFormData.usedPacifier || ""}
                onChange={(e) =>
                    setHabitsAndTicksField("usedPacifier", e.target.value)
                }
            />

            <TextField
                label="Como a chupeta foi tirada?"
                fullWidth
                variant="outlined"
                value={habitsAndTicksFormData.pacifierRemovalMethod || ""}
                onChange={(e) =>
                    setHabitsAndTicksField("pacifierRemovalMethod", e.target.value)
                }
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={habitsAndTicksFormData.suckedThumb || false}
                        onChange={(e) =>
                            setHabitsAndTicksField("suckedThumb", e.target.checked)
                        }
                    />
                }
                label="Chupou dedo"
            />

            <TextField
                label="Qual mão?"
                fullWidth
                variant="outlined"
                value={habitsAndTicksFormData.thumbHand || ""}
                onChange={(e) =>
                    setHabitsAndTicksField("thumbHand", e.target.value)
                }
            />

            <TextField
                label="Até quando chupou o dedo?"
                fullWidth
                variant="outlined"
                value={habitsAndTicksFormData.thumbSuckingDuration || ""}
                onChange={(e) =>
                    setHabitsAndTicksField("thumbSuckingDuration", e.target.value)
                }
            />

            <TextField
                label="Como parou de chupar o dedo?"
                fullWidth
                variant="outlined"
                value={habitsAndTicksFormData.thumbSuckingRemovalMethod || ""}
                onChange={(e) =>
                    setHabitsAndTicksField("thumbSuckingRemovalMethod", e.target.value)
                }
            />

            {/* Roe unhas */}
            <FormControl>
                <FormLabel>Roe unhas?</FormLabel>
                <RadioGroup
                    row
                    name="bitesNails"
                    value={habitsAndTicksFormData.bitesNails || ""}
                    onChange={(e) => setHabitsAndTicksField("bitesNails", e.target.value)}
                >
                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    <FormControlLabel
                        value="Ocasionalmente"
                        control={<Radio />}
                        label="Ocasionalmente"
                    />
                </RadioGroup>
            </FormControl>

            <TextField
                label="De qual mão?"
                fullWidth
                variant="outlined"
                value={habitsAndTicksFormData.nailBitingHand || ""}
                onChange={(e) =>
                    setHabitsAndTicksField("nailBitingHand", e.target.value)
                }
            />

            {/* 8 – Comportamentos repetitivos e rituais */}
            <FormControl>
                <FormLabel>
                    Alinha/empilha objetos ao brincar sem função aparente?
                </FormLabel>
                <RadioGroup
                    row
                    name="alignsObjects"
                    value={habitsAndTicksFormData.alignsObjects || ""}
                    onChange={(e) => setHabitsAndTicksField("alignsObjects", e.target.value)}
                >
                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    <FormControlLabel
                        value="Ocasionalmente"
                        control={<Radio />}
                        label="Ocasionalmente"
                    />
                </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel>
                    Brinca com partes de objetos em vez do todo?
                </FormLabel>
                <RadioGroup
                    row
                    name="playsWithPartsOnly"
                    value={habitsAndTicksFormData.playsWithPartsOnly || ""}
                    onChange={(e) => setHabitsAndTicksField("playsWithPartsOnly", e.target.value)}
                >
                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    <FormControlLabel
                        value="Ocasionalmente"
                        control={<Radio />}
                        label="Ocasionalmente"
                    />
                </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel>
                    Abre/fecha portas/gavetas, liga/desliga interruptores; interesse por objetos que giram?
                </FormLabel>
                <RadioGroup
                    row
                    name="opensAndClosesObjects"
                    value={habitsAndTicksFormData.opensAndClosesObjects || ""}
                    onChange={(e) =>
                        setHabitsAndTicksField("opensAndClosesObjects", e.target.value)
                    }
                >

                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    <FormControlLabel
                        value="Ocasionalmente"
                        control={<Radio />}
                        label="Ocasionalmente"
                    />
                </RadioGroup>
            </FormControl>

            <TextField
                label="Como reage quando a brincadeira é interrompida?"
                variant="outlined"
                fullWidth
                multiline
                value={habitsAndTicksFormData.reactionWhenPlayInterrupted || ""}
                onChange={(e) =>
                    setHabitsAndTicksField("reactionWhenPlayInterrupted", e.target.value)
                }
            />

            <FormControl>
                <FormLabel>
                    Brinca simbolicamente, mas de forma estereotipada?
                </FormLabel>
                <RadioGroup
                    row
                    name="rigidPretendPlay"
                    value={habitsAndTicksFormData.rigidPretendPlay || ""}
                    onChange={(e) => setHabitsAndTicksField("rigidPretendPlay", e.target.value)}
                >
                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    <FormControlLabel
                        value="Ocasionalmente"
                        control={<Radio />}
                        label="Ocasionalmente"
                    />
                </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel>
                    Resiste a mudanças na rotina pessoal/da casa?
                </FormLabel>
                <RadioGroup
                    row
                    name="resistsRoutineChange"
                    value={habitsAndTicksFormData.resistsRoutineChange || ""}
                    onChange={(e) =>
                        setHabitsAndTicksField("resistsRoutineChange", e.target.value)
                    }
                >
                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    <FormControlLabel
                        value="Ocasionalmente"
                        control={<Radio />}
                        label="Ocasionalmente"
                    />
                </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel>
                    Tem sequência fixa e rígida para atividades?
                </FormLabel>
                <RadioGroup
                    row
                    name="fixedActivitySequence"
                    value={habitsAndTicksFormData.fixedActivitySequence || ""}
                    onChange={(e) =>
                        setHabitsAndTicksField("fixedActivitySequence", e.target.value)
                    }
                >
                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    <FormControlLabel
                        value="Ocasionalmente"
                        control={<Radio />}
                        label="Ocasionalmente"
                    />
                </RadioGroup>
            </FormControl>

            <TextField
                label="Como reage quando interrompida?"
                variant="outlined"
                fullWidth
                multiline
                value={habitsAndTicksFormData.reactionToInterruption || ""}
                onChange={(e) =>
                    setHabitsAndTicksField("reactionToInterruption", e.target.value)
                }
            />

            <FormControl>
                <FormLabel>
                    Apega-se a objetos pouco comuns e se desorganiza quando retirados?
                </FormLabel>
                <RadioGroup
                    row
                    name="attachedToUnusualObjects"
                    value={habitsAndTicksFormData.attachedToUnusualObjects || ""}
                    onChange={(e) =>
                        setHabitsAndTicksField("attachedToUnusualObjects", e.target.value)
                    }
                >
                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    <FormControlLabel
                        value="Ocasionalmente"
                        control={<Radio />}
                        label="Ocasionalmente"
                    />
                </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel>
                    Movimentos das mãos perto do rosto?
                </FormLabel>
                <RadioGroup
                    row
                    name="handNearFace"
                    value={habitsAndTicksFormData.handNearFace || ""}
                    onChange={(e) => setHabitsAndTicksField("handNearFace", e.target.value)}
                >
                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    <FormControlLabel
                        value="Ocasionalmente"
                        control={<Radio />}
                        label="Ocasionalmente"
                    />
                </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel>
                    Movimento das mãos junto ao corpo?
                </FormLabel>
                <RadioGroup
                    row
                    name="handsNearBody"
                    value={habitsAndTicksFormData.handsNearBody || ""}
                    onChange={(e) => setHabitsAndTicksField("handsNearBody", e.target.value)}
                >
                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    <FormControlLabel
                        value="Ocasionalmente"
                        control={<Radio />}
                        label="Ocasionalmente"
                    />
                </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel>Balanço do corpo?</FormLabel>
                <RadioGroup
                    row
                    name="bodySwing"
                    value={habitsAndTicksFormData.bodySwing || ""}
                    onChange={(e) => setHabitsAndTicksField("bodySwing", e.target.value)}
                >
                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    <FormControlLabel
                        value="Ocasionalmente"
                        control={<Radio />}
                        label="Ocasionalmente"
                    />
                </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel>Movimento de braços (flapping)?</FormLabel>
                <RadioGroup
                    row
                    name="armFlapping"
                    value={habitsAndTicksFormData.armFlapping || ""}
                    onChange={(e) => setHabitsAndTicksField("armFlapping", e.target.value)}
                >
                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    <FormControlLabel
                        value="Ocasionalmente"
                        control={<Radio />}
                        label="Ocasionalmente"
                    />
                </RadioGroup>
            </FormControl>

            <TextField
                label="Medos (comportamentos, reações, intensidade etc.)"
                variant="outlined"
                fullWidth
                multiline
                value={habitsAndTicksFormData.fears || ""}
                onChange={(e) => setHabitsAndTicksField("fears", e.target.value)}
            />

            <FormControl>
                <FormLabel>
                    Interesse por cheiro/textura dos objetos?
                </FormLabel>
                <RadioGroup
                    row
                    name="sensoryInterest"
                    value={habitsAndTicksFormData.sensoryInterest || ""}
                    onChange={(e) => setHabitsAndTicksField("sensoryInterest", e.target.value)}
                >
                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    <FormControlLabel
                        value="Ocasionalmente"
                        control={<Radio />}
                        label="Ocasionalmente"
                    />
                </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel>
                    Hipersensibilidade a barulhos comuns?
                </FormLabel>
                <RadioGroup
                    row
                    name="soundSensitivity"
                    value={habitsAndTicksFormData.soundSensitivity || ""}
                    onChange={(e) => setHabitsAndTicksField("soundSensitivity", e.target.value)}
                >
                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    <FormControlLabel
                        value="Ocasionalmente"
                        control={<Radio />}
                        label="Ocasionalmente"
                    />
                </RadioGroup>
            </FormControl>

            {/* 9 – Problemas de comportamento */}
            <FormControl>
                <FormLabel>
                    Masturbação em público ou tentativa de tocar partes íntimas de outros?
                </FormLabel>
                <RadioGroup
                    row
                    name="inappropriateTouch"
                    value={habitsAndTicksFormData.inappropriateTouch || ""}
                    onChange={(e) =>
                        setHabitsAndTicksField("inappropriateTouch", e.target.value)
                    }
                >
                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    <FormControlLabel
                        value="Ocasionalmente"
                        control={<Radio />}
                        label="Ocasionalmente"
                    />
                </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel>
                    Demonstra hiperatividade?
                </FormLabel>
                <RadioGroup
                    row
                    name="hyperactivity"
                    value={habitsAndTicksFormData.hyperactivity || ""}
                    onChange={(e) => setHabitsAndTicksField("hyperactivity", e.target.value)}
                >
                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    <FormControlLabel
                        value="Ocasionalmente"
                        control={<Radio />}
                        label="Ocasionalmente"
                    />
                </RadioGroup>
            </FormControl>

            <TextField
                label="Observações"
                fullWidth
                variant="outlined"
                multiline
                minRows={3}
                value={habitsAndTicksFormData.observations || ""}
                onChange={(e) => setHabitsAndTicksField("observations", e.target.value)}
            />

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                <Button variant="outlined" color="primary" onClick={handleBack}>
                    Voltar
                </Button>
                <Button type="submit" variant="contained" color="primary">
                    Avançar
                </Button>
            </Box>
        </Box>
    );
};
