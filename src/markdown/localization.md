---
title: "Real Time Localization"
slug: "/localization"
id: 6
---
# Real Time Localization

Real-time localization remains a crucial aspect of the project, significantly
contributing to the efficiency and accuracy of detection and tracking in
defense applications. This process involves the precise determination of object
positions within a given space, in real time, thereby enabling rapid response
to dynamic scenarios.

In our context, the real-time localization process has been substantially
informed by recent advancements in the field. Specifically, the integration of
DeblurSR (Song et al., 2023) and E-CIR (Song et al., 2022) methodologies
offer promising avenues for enhancing the localization capabilities.

The DeblurSR method, detailed in
section [DeblurSR](/signature-detection#deblursr-event-based-motion-deblurring-under-the-spiking-representation),
providnes innovative techniques for super-resolution and deblurring, thereby
improving the image clarity required for precise location determination. By
applying these advancements, the reliability of our localization process can be
significantly augmented.

Similarly, the E-CIR framework, discussed in
section [E-CIR](/integration#e-cir-event-enhanced-continuous-intensity-recovery),
introduces novel concepts of information
retrieval and object recognition within electronic circuits. These principles
can be adapted to improve the computational efficiency of the real-time
localization process.

The integration of these methodologies into our real-time localization module
(referenced in Milestone 8 in Table 1) demonstrates our
commitment to employing state-of-the-art techniques. These inclusions not only
reflect the current progress in the project (colored in light green in Table 1)
but also outline the direction of our remaining tasks
(colored in light blue in Table 1).


<table>
    <caption>Milestones of the funded research project.</caption>
    <thead>
        <tr>
            <th>MILESTONE</th>
            <th>TASK</th>
            <th>START</th>
            <th>PLAN END</th>
            <th>ACTUAL END</th>
        </tr>
    </thead>
    <tbody>
        <tr style="background-color:LightGreen;">
            <td>Milestone 1</td>
            <td>Project kickoff</td>
            <td>9/30/2020</td>
            <td>9/30/2020</td>
            <td>9/30/2020</td>
        </tr>
        <tr style="background-color:LightGreen;">
            <td>Milestone 2</td>
            <td>On the Fly sampling</td>
            <td>9/30/2020</td>
            <td>4/30/2021</td>
            <td>4/30/2021</td>
        </tr>
        <tr style="background-color:LightGreen;">
            <td>Milestone 3</td>
            <td>Camera ISP Code &amp; Paper</td>
            <td>4/30/2021</td>
            <td>7/30/2021</td>
            <td>7/30/2021</td>
        </tr>
        <tr style="background-color:LightGreen;">
            <td>Milestone 4</td>
            <td>Initial SW Code &amp; demo of DEDRECON</td>
            <td>7/30/2021</td>
            <td>9/30/2021</td>
            <td>9/30/2021</td>
        </tr>
        <tr style="background-color:LightGreen;">
            <td>Milestone 5</td>
            <td>Signature Detection &amp; Classification</td>
            <td>9/30/2021</td>
            <td>12/30/2021</td>
            <td>12/30/2021</td>
        </tr>
        <tr style="background-color:LightGreen;">
            <td>Milestone 6</td>
            <td>Integration of IR/EO video streams</td>
            <td>12/30/2021</td>
            <td>8/30/2022</td>
            <td>8/30/2022</td>
        </tr>
        <tr style="background-color:LightGreen;">
            <td>Milestone 7</td>
            <td>Novel event signature detection</td>
            <td>8/30/2022</td>
            <td>12/30/2022</td>
            <td>12/30/2022</td>
        </tr>
        <tr style="background-color:LightGreen;">
            <td>Milestone 8</td>
            <td>Real Time localization</td>
            <td>12/30/2022</td>
            <td>4/30/2023</td>
            <td>4/30/2023</td>
        </tr>
        <tr style="background-color:LightBlue;">
            <td>Milestone 9</td>
            <td>Learning High Fidelity Stable Decision Process Models</td>
            <td>4/30/2023</td>
            <td>10/30/2023</td>
            <td></td>
        </tr>
        <tr style="background-color:LightBlue;">
            <td>Milestone 10</td>
            <td>Coordination with Stakeholder TPOC</td>
            <td>7/30/2023</td>
            <td>8/30/2023</td>
            <td></td>
        </tr>
        <tr style="background-color:LightBlue;">
            <td>Milestone 11</td>
            <td>SW Code for advanced capabilities</td>
            <td>4/30/2023</td>
            <td>12/30/2023</td>
            <td></td>
        </tr>
    </tbody>
</table>

### References

- Song, C., Bajaj, C., & Huang, Q. (2023). DeblurSR: Event-Based Motion
  Deblurring Under the Spiking Representation. ArXiv Preprint ArXiv:2303.08977.

- Song, C., Huang, Q., & Bajaj, C. (2022). E-cir: Event-enhanced continuous
  intensity recovery. Proceedings of the IEEE/CVF Conference on Computer Vision
  and Pattern Recognition, 7803–7812.